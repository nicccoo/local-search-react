import { useState } from 'react';
import SearchBox from "./components/SearchBox";
import SearchResults from './components/SearchResults';
import data from '../../data/users.json'
import "./style.css";

export default function Search () {
    const [isAtTop, setIsAtTop] = useState(false);
    const [userData, setUserData] = useState(data);
    const [results, setResults] = useState([])

    const handleCloseSearch = () => { 
        setIsAtTop(false);
        setResults([]);
    }
  
    const handleSearchClick = (searchText) => {
        setIsAtTop(true)
        if (userData?.length) {        
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = userData.filter((value) => {
                return(
                value.name.toLowerCase().includes(searchTextMinus) || 
                value.phone.toLowerCase().includes(searchTextMinus) ||
                value.email.toLowerCase().includes(searchTextMinus) ||
                value.username.toLowerCase().includes(searchTextMinus)
                )
            });      
            setResults(filteredData);
        }
    };



   return (
       <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} 
            onClose={handleCloseSearch}
            isSearching={isAtTop}/>
            <SearchResults results = {results} isSearching={isAtTop}/>
       </div>
   )
    
};