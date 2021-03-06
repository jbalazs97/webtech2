import { useState } from "react";

export default function useInputState() {
  const [value, setValue] = useState({});
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setValue("");
  };
  return [value.name, value.price, handleChange, reset];
}
