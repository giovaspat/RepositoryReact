import { useRef, useCallback } from 'react';
import useSWR from 'swr';
import { INFINITE_PREFIX, serialize, withMiddleware, SWRGlobalState, cache, createCacheHelper, isUndefined, useIsomorphicLayoutEffect, UNDEFINED, isFunction } from 'swr/_internal';
import { useSyncExternalStore } from 'use-sync-external-store/shim/index.js';

const getFirstPageKey = (getKey)=>{
    return serialize(getKey ? getKey(0, null) : null)[0];
};
const unstable_serialize = (getKey)=>{
    return INFINITE_PREFIX + getFirstPageKey(getKey);
};

// We have to several type castings here because `useSWRInfinite` is a special
// const INFINITE_PREFIX = '$inf$'
const EMPTY_PROMISE = Promise.resolve();
// export const unstable_serialize = (getKey: SWRInfiniteKeyLoader) => {
//   return INFINITE_PREFIX + getFirstPageKey(getKey)
// }
const infinite = (useSWRNext)=>(getKey, fn, config)=>{
        const didMountRef = useRef(false);
        const { cache: cache$1, initialSize = 1, revalidateAll = false, persistSize = false, revalidateFirstPage = true, revalidateOnMount = false, parallel = false } = config;
        const [, , , PRELOAD] = SWRGlobalState.get(cache);
        // The serialized key of the first page. This key will be used to store
        // metadata of this SWR infinite hook.
        let infiniteKey;
        try {
            infiniteKey = getFirstPageKey(getKey);
            if (infiniteKey) infiniteKey = INFINITE_PREFIX + infiniteKey;
        } catch (err) {
        // Not ready yet.
        }
        const [get, set, subscribeCache] = createCacheHelper(cache$1, infiniteKey);
        const getSnapshot = useCallback(()=>{
            const size = isUndefined(get()._l) ? initialSize : get()._l;
            return size;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            cache$1,
            infiniteKey,
            initialSize
        ]);
        useSyncExternalStore(useCallback((callback)=>{
            if (infiniteKey) return subscribeCache(infiniteKey, ()=>{
                callback();
            });
            return ()=>{};
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            cache$1,
            infiniteKey
        ]), getSnapshot, getSnapshot);
        const resolvePageSize = useCallback(()=>{
            const cachedPageSize = get()._l;
            return isUndefined(cachedPageSize) ? initialSize : cachedPageSize;
        // `cache` isn't allowed to change during the lifecycle
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            infiniteKey,
            initialSize
        ]);
        // keep the last page size to restore it with the persistSize option
        const lastPageSizeRef = useRef(resolvePageSize());
        // When the page key changes, we reset the page size if it's not persisted
        useIsomorphicLayoutEffect(()=>{
            if (!didMountRef.current) {
                didMountRef.current = true;
                return;
            }
            if (infiniteKey) {
                // If the key has been changed, we keep the current page size if persistSize is enabled
                // Otherwise, we reset the page size to cached pageSize
                set({
                    _l: persistSize ? lastPageSizeRef.current : resolvePageSize()
                });
            }
        // `initialSize` isn't allowed to change during the lifecycle
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            infiniteKey,
            cache$1
        ]);
        // Needs to check didMountRef during mounting, not in the fetcher
        const shouldRevalidateOnMount = revalidateOnMount && !didMountRef.current;
        // Actual SWR hook to load all pages in one fetcher.
        const swr = useSWRNext(infiniteKey, async (key)=>{
            // get the revalidate context
            const forceRevalidateAll = get()._i;
            // return an array of page data
            const data = [];
            const pageSize = resolvePageSize();
            const [getCache] = createCacheHelper(cache$1, key);
            const cacheData = getCache().data;
            const revalidators = [];
            let previousPageData = null;
            for(let i = 0; i < pageSize; ++i){
                const [pageKey, pageArg] = serialize(getKey(i, parallel ? null : previousPageData));
                if (!pageKey) {
                    break;
                }
                const [getSWRCache, setSWRCache] = createCacheHelper(cache$1, pageKey);
                // Get the cached page data.
                let pageData = getSWRCache().data;
                // should fetch (or revalidate) if:
                // - `revalidateAll` is enabled
                // - `mutate()` called
                // - the cache is missing
                // - it's the first page and it's not the initial render
                // - `revalidateOnMount` is enabled and it's on mount
                // - cache for that page has changed
                const shouldFetchPage = revalidateAll || forceRevalidateAll || isUndefined(pageData) || revalidateFirstPage && !i && !isUndefined(cacheData) || shouldRevalidateOnMount || cacheData && !isUndefined(cacheData[i]) && !config.compare(cacheData[i], pageData);
                if (fn && shouldFetchPage) {
                    const revalidate = async ()=>{
                        const hasPreloadedRequest = pageKey in PRELOAD;
                        if (!hasPreloadedRequest) {
                            pageData = await fn(pageArg);
                        } else {
                            const req = PRELOAD[pageKey];
                            // delete the preload cache key before resolving it
                            // in case there's an error
                            delete PRELOAD[pageKey];
                            // get the page data from the preload cache
                            pageData = await req;
                        }
                        setSWRCache({
                            data: pageData,
                            _k: pageArg
                        });
                        data[i] = pageData;
                    };
                    if (parallel) {
                        revalidators.push(revalidate);
                    } else {
                        await revalidate();
                    }
                } else {
                    data[i] = pageData;
                }
                if (!parallel) {
                    previousPageData = pageData;
                }
            }
            // flush all revalidateions in parallel
            if (parallel) {
                await Promise.all(revalidators.map((r)=>r()));
            }
            // once we executed the data fetching based on the context, clear the context
            set({
                _i: UNDEFINED
            });
            // return the data
            return data;
        }, config);
        const mutate = useCallback(// eslint-disable-next-line func-names
        function(data, opts) {
            // When passing as a boolean, it's explicitly used to disable/enable
            // revalidation.
            const options = typeof opts === 'boolean' ? {
                revalidate: opts
            } : opts || {};
            // Default to true.
            const shouldRevalidate = options.revalidate !== false;
            // It is possible that the key is still falsy.
            if (!infiniteKey) return EMPTY_PROMISE;
            if (shouldRevalidate) {
                if (!isUndefined(data)) {
                    // We only revalidate the pages that are changed
                    set({
                        _i: false
                    });
                } else {
                    // Calling `mutate()`, we revalidate all pages
                    set({
                        _i: true
                    });
                }
            }
            return arguments.length ? swr.mutate(data, {
                ...options,
                revalidate: shouldRevalidate
            }) : swr.mutate();
        }, // swr.mutate is always the same reference
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            infiniteKey,
            cache$1
        ]);
        // Extend the SWR API
        const setSize = useCallback((arg)=>{
            // It is possible that the key is still falsy.
            if (!infiniteKey) return EMPTY_PROMISE;
            const [, changeSize] = createCacheHelper(cache$1, infiniteKey);
            let size;
            if (isFunction(arg)) {
                size = arg(resolvePageSize());
            } else if (typeof arg == 'number') {
                size = arg;
            }
            if (typeof size != 'number') return EMPTY_PROMISE;
            changeSize({
                _l: size
            });
            lastPageSizeRef.current = size;
            // Calculate the page data after the size change.
            const data = [];
            const [getInfiniteCache] = createCacheHelper(cache$1, infiniteKey);
            let previousPageData = null;
            for(let i = 0; i < size; ++i){
                const [pageKey] = serialize(getKey(i, previousPageData));
                const [getCache] = createCacheHelper(cache$1, pageKey);
                // Get the cached page data.
                const pageData = pageKey ? getCache().data : UNDEFINED;
                // Call `mutate` with infinte cache data if we can't get it from the page cache.
                if (isUndefined(pageData)) {
                    return mutate(getInfiniteCache().data);
                }
                data.push(pageData);
                previousPageData = pageData;
            }
            return mutate(data);
        }, // exclude getKey from the dependencies, which isn't allowed to change during the lifecycle
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            infiniteKey,
            cache$1,
            mutate,
            resolvePageSize
        ]);
        // Use getter functions to avoid unnecessary re-renders caused by triggering
        // all the getters of the returned swr object.
        return {
            size: resolvePageSize(),
            setSize,
            mutate,
            get data () {
                return swr.data;
            },
            get error () {
                return swr.error;
            },
            get isValidating () {
                return swr.isValidating;
            },
            get isLoading () {
                return swr.isLoading;
            }
        };
    };
const useSWRInfinite = withMiddleware(useSWR, infinite);

export { useSWRInfinite as default, infinite, unstable_serialize };
