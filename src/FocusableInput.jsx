import { useEffect, useRef } from "react";

export function FocusableInput () {
  const inputRef = useRef(null)

 useEffect (()=>{
    inputRef.current?.focus()
 }, [])

  return (
    <div>
      <h1>Focusable Input</h1>
      <input ref={inputRef} />
    </div>
  );

}