import React from 'react'

export default function UserList({addList, listOfUser}) {
  return (
    <div>
          <button onClick={addList}>Click</button>
     {listOfUser.map(user => {
      return(
        <div>
          <h4>{user.name}</h4>
          <h4>{user.username}</h4>
          <h4>{user.address.city}</h4>
          <h4>{user.phone}</h4>
        </div>
      )
     })}
    </div>
  )
}
