import { useState } from "react";

function useInput() {
  // reduce bloat of watching inputs for changes.
  let [value, setValue] = useState("");

  let onChange = function (event: any) {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    onChange,
  };
}

export default useInput;
