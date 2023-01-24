import {useState,useEffect} from 'react';

import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  console.log("render");
  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => response.json())
      .then(json => setMonsters(json))
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    console.log("searchField: ",searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Random Api Exampales</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

