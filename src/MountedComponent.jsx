import { useEffect, useRef } from "react";

export function MountedComponent () {
  const mountedRef = useRef(false)
  const inputRef = useRef(null)

 useEffect (()=>{
  if (!mountedRef.current) {
    mountedRef.current = true;
    console.log("Mounted component for the first time")
  }

    inputRef.current?.focus()
 }, [])

  return (
    <div>
      <h1>Focusable Input</h1>
      <input ref={inputRef} />
    </div>
  );

}