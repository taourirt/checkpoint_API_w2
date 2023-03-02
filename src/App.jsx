import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import UserList from './UserList'
import axios from 'axios'

function App() {
  const [listOfUser, setListOFUser] = useState([])

  function getUser(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      setListOFUser(response.data);})
  }
  function addList(e){
e.preventDefault();

getUser();

  }
  useEffect(() => {
    getUser} , [])
  return (
    <div className="App">
    <UserList addList={addList} listOfUser={listOfUser}/>
    </div>
  )
}

export default App
