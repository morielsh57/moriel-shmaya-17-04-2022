import { Switch } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { IWeatherReducerStateT } from "../../../reducers/reducer.interfaces";
import { useSetIsImperialVal } from "../../../hooks/useSetisImperialTempVal";

import "./switchTempToggle.scss";
import "../switchToggleDarkMode.scss";

const SwitchTempToggle: React.FC = (props) => {
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);
  const isImperialVal = useSelector((store: IWeatherReducerStateT) => store.isImperialVal);
  const setIsImperialVal = useSetIsImperialVal();

  const onChange = (checked:boolean) => {
    setIsImperialVal(checked);
}

  return (
    <div className={`switch-container ${isDarkMode && "dark"}`}>
            <div className={`${!isImperialVal && "checked"}`}>C</div>
            <Switch onChange={onChange}  checked={isImperialVal}/>
            <div className={`${isImperialVal && "checked"}`}>F</div>
        </div>
  );
}
export default SwitchTempToggle;