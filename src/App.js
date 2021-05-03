import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {Search} from './components/search/search.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      search:' '
    };
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handlechange = e =>{
  this.setState(
    {search:e.target.value}
  )
  };

  render(){
    const {monsters, search} = this.state;
    const filteredmonsters = monsters.filter(monster=>(
      monster.name.toLowerCase().includes(search.toLowerCase())));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder='search Monsters'
          handlechange = {this.handlechange}
          />
        <CardList monsters={filteredmonsters}>
        </CardList>
      </div>
      )
  }
}

export default App;
