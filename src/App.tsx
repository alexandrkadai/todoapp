import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-bar/search-bar.component';
import { getData } from './utils/fetch.data';

import './App.scss';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonstersfirst, setFilteredMonstersFirst] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonstersFirst(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="main-title">Simple Search App</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="Search-Monster"
        className="searchbox-monster"
      />
      <CardList monsters={filteredMonstersfirst} />
    </div>
  );
};
export default App;
