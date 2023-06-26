import { useState, ChangeEvent } from "react";
import { StyledLabel } from "./ToggleSwitchStyle";
const ToggleSwitch = () => {
  const [switchState, setSwitchState] = useState(true);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setSwitchState(!switchState);
  };

  return <></>;
};

export default ToggleSwitch;
