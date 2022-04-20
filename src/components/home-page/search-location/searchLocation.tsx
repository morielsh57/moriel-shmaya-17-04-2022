import React, { useState, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { GET_LOCATION_AUTO_COMPLETE } from "../../../shared/services/api.service";
import { useDispatch } from "react-redux";
import { SET_SELECTED_LOCATION_ACTION } from "../../../shared/consts/strings";
import { ILocationAutoCompleteApiT } from "../../../shared/consts/weatherApi.interfaces";
import "./searchLocation.scss";

const SearchLocation: React.FC = (props) => {
  const [searchResult, setSearchResult] = useState<ILocationAutoCompleteApiT[]>([]);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const onSearchKeyup = () => {
    const inputValue = searchInputRef.current?.value;
    if (inputValue!.length > 1) {
      if (typingTimeout) clearTimeout(typingTimeout);
      setTypingTimeout(
        setTimeout(function () {
          searchCities(inputValue!);
        }, 300)
      );
    }
    else setSearchResult([]);
  }

  const searchCities = async(inputValue:string) => {
    try{
    const searchRes:ILocationAutoCompleteApiT[] = await GET_LOCATION_AUTO_COMPLETE(inputValue);
    setSearchResult(searchRes.slice(0,5));
    }
    catch(e){
      console.log("error",e);
    }
  }

  const onSelectLocation = (key:string,locationName:string) => {
    setSearchResult([]);
    dispatch({type: SET_SELECTED_LOCATION_ACTION, locationSelected:{key: key, location:locationName}})
    searchInputRef.current!.value = "";
    
  }

  const onSearchFocus = () => {
    const inputValue = searchInputRef.current?.value;
    if(searchResult.length<=0 && inputValue!.length > 1) searchCities(inputValue!);
  }


  return (
    <section className="search-location-container">
      <div className="search-field">
        <button><SearchOutlined /></button>
        <input type="text" placeholder="Search" ref={searchInputRef} onKeyUp={onSearchKeyup} onFocus={onSearchFocus} className={`${searchResult.length <= 0 && "no-results"}`} />
      </div>
      {searchResult.length > 0 &&
        <ul className="search-results">
          {searchResult.map((item:any) => {
            return(
              <li key={item.Key} onClick={()=>onSelectLocation(item.Key,item.LocalizedName)}>{item.LocalizedName}, {item.Country.LocalizedName}</li>
            )
          })}
        </ul>
      }
    </section>
  );
}
export default SearchLocation;