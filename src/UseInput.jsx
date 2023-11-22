import { useState } from 'react';

export function useInput(startValue) {
  const [value, setValue] = useState(startValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}




