import React, { useState, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { GET_LOCATION_AUTO_COMPLETE } from "../../../shared/services/api.service";
import { ILocationAutoCompleteApiT } from "../../../shared/consts/weatherApi.interfaces";
import { alertMessage } from "../../../shared/consts/notification";
import { useSetSelectedLocation } from "../../../shared/hooks/useSetSelectedLocation";

import "./searchLocation.scss";

const SearchLocation: React.FC = (props) => {
  const [searchResult, setSearchResult] = useState<ILocationAutoCompleteApiT[]>([]);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>();
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [inputValInvalid, setInputValInvalid] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const setSelectedLocation = useSetSelectedLocation();

  const onSearchKeyup = (e:React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = searchInputRef.current?.value;
    let isValidValue = checkValueInput(inputValue!);
    if (isValidValue && inputValue!.length > 1) {
      if (typingTimeout) clearTimeout(typingTimeout);
      setTypingTimeout(
        setTimeout(function () {
          searchCities(inputValue!);
        }, 300)
      );
    }
    else setSearchResult([]);
  }

  const checkValueInput = (inputValue:string) => {
    // regexp return true if there is character that is not the english chart or space
    var regex = new RegExp("[^a-zA-Z\\s]");
    //if there is a character that is no A-Z a-z or space we return false
    if(regex.test(inputValue)){
      setInputValInvalid(true);
      return false;
    }
    setInputValInvalid(false);
    return true;
  }

  const searchCities = async (inputValue: string) => {
    try {
      const searchRes: ILocationAutoCompleteApiT[] = await GET_LOCATION_AUTO_COMPLETE(inputValue);
      setSearchResult(searchRes.slice(0, 5));
    }
    catch (e) {
      alertMessage("There was a problem geting this city", "error");
      throw new Error(`There was a problem geting this city ${e}`);
    }
  }

  const onSelectLocation = (key: string, locationName: string) => {
    setSearchResult([]);
    setSelectedLocation({ key: key, location: locationName })
    searchInputRef.current!.value = "";
    alertMessage(`${locationName} selected`, "success");
  }

  const onSearchFocus = () => {
    const inputValue = searchInputRef.current?.value;
    if (searchResult.length <= 0 && inputValue!.length > 1) searchCities(inputValue!);
  }

  const onKeyDownSelectCityLi = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchResult.length > 0) {
      switch (e.code) {
        case "ArrowDown":
          if (selectIndex + 1 >= searchResult.length) setSelectIndex(0);
          else setSelectIndex(selectIndex+1);
          break;
        case "ArrowUp":
          console.log("kyeup");
          
          if(selectIndex - 1 >= 0) setSelectIndex(selectIndex-1);
          break;
        case "Enter":
          onSelectLocation(searchResult[selectIndex].Key,searchResult[selectIndex].LocalizedName);
          setSelectIndex(0);
          break;
        default:
          setSelectIndex(0);
          break;
      }
    }

  }

  return (
    <section className="search-location-container">
      <div className="search-field">
        <button><SearchOutlined /></button>
        <input type="text" placeholder="Search" ref={searchInputRef} onKeyUp={onSearchKeyup} onFocus={onSearchFocus} onKeyDown={(e) => onKeyDownSelectCityLi(e)} className={`${searchResult.length <= 0 && "no-results"} ${inputValInvalid && "invalid-val"}`} />
        {inputValInvalid && <small className="error-invalid">English letters only</small>}
      </div>
      {searchResult.length > 0 &&
        <ul className="search-results">
          {searchResult.map((item, indx) => {
            return (
              <li key={item.Key} onClick={() => onSelectLocation(item.Key, item.LocalizedName)} className={`${selectIndex === indx && "hover"}`}>{item.LocalizedName}, {item.Country.LocalizedName}</li>
            )
          })}
        </ul>
      }
    </section>
  );
}
export default SearchLocation;