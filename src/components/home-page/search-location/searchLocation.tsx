import React, { useState, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { GET_LOCATION } from "../../../shared/services/api.service";
import "./searchLocation.css";
import { useDispatch } from "react-redux";

const SearchLocation: React.FC = (props) => {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const onSearchKeyup = () => {
    const inputValue = searchInputRef.current?.value;
    if (inputValue!.length > 1) {
      console.log(inputValue!.length);
      
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
    const searchRes = await GET_LOCATION(inputValue);
    setSearchResult(searchRes.slice(0,5));
    console.log(searchResult);
    }
    catch(e){
      console.log("error",e);
      
    }
  }

  const onSelectLocation = (key:string,locationName:string) => {
    dispatch({type: "SET_SELECTED_LOCATION", locationForecasts:{key: key, location:locationName}})
  }


  return (
    <section className="search-location-container">
      <div className="search-field">
        <button><SearchOutlined /></button>
        <input type="text" placeholder="Search" ref={searchInputRef} onKeyUp={onSearchKeyup} className={`${searchResult.length <= 0 && "no-results"}`} />
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