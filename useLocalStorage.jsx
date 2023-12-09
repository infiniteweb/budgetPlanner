import { useState, useEffect } from "react";

function getSavedValue(key, initailValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initailValue instanceof Function) return initailValue();
}

export default function useLocalStorage(key, initailValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initailValue);
  });
  useEffect (()=> {
    localStorage.setItem(key, JSON.stringify(value)), [value]
  })
  return [value, setValue]
}
