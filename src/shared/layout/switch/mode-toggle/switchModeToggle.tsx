import { Switch } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { IWeatherReducerStateT } from "../../../reducers/reducer.interfaces";
import { useSetIsDarkMode } from "../../../hooks/useSetIsDarkMode";

import "../temperature-toggle/switchTempToggle.scss";
import "../switchToggleDarkMode.scss";
import "./switchModeToggle.scss";

const SwitchModeToggle: React.FC = (props) => {
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);
  const setIsDarkMode = useSetIsDarkMode();

  const onChange = (checked:boolean) => {
    setIsDarkMode(checked);
}

  return (
    <div className={`switch-container switch-mode-container ${isDarkMode && "dark"}`}>
            <div className={`${!isDarkMode && "checked"}`}>Light</div>
            <Switch onChange={onChange}  checked={isDarkMode}/>
            <div className={`${isDarkMode && "checked"}`}>Dark</div>
        </div>
  );
}
export default SwitchModeToggle;