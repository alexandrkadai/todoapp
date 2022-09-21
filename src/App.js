import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-bar/search-bar.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonstersfirst, setFilteredMonstersFirst] = useState(monsters);
  const [stringField, setStringField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonstersFirst(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onStringChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="main-title">Components Functional and Class Lesson</h1>
      <SearchBox
        onSearchChange={onStringChange}
        placeholder="Search-Monster"
        className="searchbox-monster"
      />
      <CardList monsters={filteredMonstersfirst} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters:[],
//       searchField : ''
//     }
//   }

// componentDidMount(){
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then(users =>
//   this.setState(
//     () => {
//   return { monsters: users };
// })
// )
//   }

// onSearchChange = (event) => {
// const searchField = event.target.value.toLocaleLowerCase();
// this.setState(
//   () => {
//   return { searchField };
// });
// }

// render() {
//

//   return (
//     <div className="App">
//     <h1 className='main-title'>Props Return Lesson</h1>
//       <SearchBox onSearchChange = { onSearchChange } placeholder= 'Search-Monster' className='searchbox-monster' />
//       <CardList monsters={filtered}/>
//     </div>
//   );
//   }
// }

export default App;
