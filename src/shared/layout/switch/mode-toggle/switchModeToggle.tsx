import { Switch } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SET_IS_DARK_MODE_ACTION } from "../../../consts/strings";
import { IWeatherReducerStateT } from "../../../reducers/reducer.interfaces";
import "../temperature-toggle/switchTempToggle.scss";
import "../switchToggleDarkMode.scss";
import "./switchModeToggle.scss";

const SwitchModeToggle: React.FC = (props) => {
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);
  const dispatch = useDispatch();

  const onChange = (checked:boolean) => {
    dispatch({type:SET_IS_DARK_MODE_ACTION, isDarkMode:checked});
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