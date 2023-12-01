import { Arguments, BareFetcher, SWRConfiguration, SWRResponse, StrictTupleKey, Middleware } from 'swr/_internal';

type FetcherResponse<Data = unknown> = Data | Promise<Data>;
type SWRInfiniteFetcher<Data = any, KeyLoader extends SWRInfiniteKeyLoader = SWRInfiniteKeyLoader> = KeyLoader extends (...args: any[]) => any ? ReturnType<KeyLoader> extends infer T | null | false | undefined ? (args: T) => FetcherResponse<Data> : never : never;
type SWRInfiniteKeyLoader<Data = any, Args extends Arguments = Arguments> = (index: number, previousPageData: Data | null) => Args;
interface SWRInfiniteCompareFn<Data = any> {
    (a: Data | undefined, b: Data | undefined): boolean;
    (a: Data[] | undefined, b: Data[] | undefined): boolean;
}
interface SWRInfiniteConfiguration<Data = any, Error = any, Fn extends SWRInfiniteFetcher<Data> = BareFetcher<Data>> extends Omit<SWRConfiguration<Data[], Error>, 'compare'> {
    initialSize?: number;
    revalidateAll?: boolean;
    persistSize?: boolean;
    revalidateFirstPage?: boolean;
    parallel?: boolean;
    fetcher?: Fn;
    compare?: SWRInfiniteCompareFn<Data>;
}
interface SWRInfiniteResponse<Data = any, Error = any> extends SWRResponse<Data[], Error> {
    size: number;
    setSize: (size: number | ((_size: number) => number)) => Promise<Data[] | undefined>;
}
interface SWRInfiniteHook {
    <Data = any, Error = any, KeyLoader extends SWRInfiniteKeyLoader = (index: number, previousPageData: Data | null) => StrictTupleKey>(getKey: KeyLoader): SWRInfiniteResponse<Data, Error>;
    <Data = any, Error = any, KeyLoader extends SWRInfiniteKeyLoader = (index: number, previousPageData: Data | null) => StrictTupleKey>(getKey: KeyLoader, fetcher: SWRInfiniteFetcher<Data, KeyLoader> | null): SWRInfiniteResponse<Data, Error>;
    <Data = any, Error = any, KeyLoader extends SWRInfiniteKeyLoader = (index: number, previousPageData: Data | null) => StrictTupleKey>(getKey: KeyLoader, config: SWRInfiniteConfiguration<Data, Error, SWRInfiniteFetcher<Data, KeyLoader>> | undefined): SWRInfiniteResponse<Data, Error>;
    <Data = any, Error = any, KeyLoader extends SWRInfiniteKeyLoader = (index: number, previousPageData: Data | null) => StrictTupleKey>(getKey: KeyLoader, fetcher: SWRInfiniteFetcher<Data, KeyLoader> | null, config: SWRInfiniteConfiguration<Data, Error, SWRInfiniteFetcher<Data, KeyLoader>> | undefined): SWRInfiniteResponse<Data, Error>;
    <Data = any, Error = any>(getKey: SWRInfiniteKeyLoader): SWRInfiniteResponse<Data, Error>;
    <Data = any, Error = any>(getKey: SWRInfiniteKeyLoader, fetcher: BareFetcher<Data> | null): SWRInfiniteResponse<Data, Error>;
    <Data = any, Error = any>(getKey: SWRInfiniteKeyLoader, config: SWRInfiniteConfiguration<Data, Error, BareFetcher<Data>> | undefined): SWRInfiniteResponse<Data, Error>;
    <Data = any, Error = any>(getKey: SWRInfiniteKeyLoader, fetcher: BareFetcher<Data> | null, config: SWRInfiniteConfiguration<Data, Error, BareFetcher<Data>> | undefined): SWRInfiniteResponse<Data, Error>;
}

declare const unstable_serialize: (getKey: SWRInfiniteKeyLoader) => string;

declare const infinite: Middleware;
declare const useSWRInfinite: SWRInfiniteHook;

export { SWRInfiniteCompareFn, SWRInfiniteConfiguration, SWRInfiniteFetcher, SWRInfiniteHook, SWRInfiniteKeyLoader, SWRInfiniteResponse, useSWRInfinite as default, infinite, unstable_serialize };
