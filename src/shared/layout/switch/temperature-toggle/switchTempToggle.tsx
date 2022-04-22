import { Switch } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SET_IS_IMPERIAL_VAL_ACTION } from "../../../consts/strings";
import { IWeatherReducerStateT } from "../../../reducers/reducer.interfaces";
import "./switchTempToggle.scss";
import "../switchToggleDarkMode.scss";

const SwitchTempToggle: React.FC = (props) => {
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);
  const isImperialVal = useSelector((store: IWeatherReducerStateT) => store.isImperialVal);
  const dispatch = useDispatch();

  const onChange = (checked:boolean) => {
    dispatch({type:SET_IS_IMPERIAL_VAL_ACTION, isImperialVal:checked});
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