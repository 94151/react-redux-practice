import React from 'react'

const UserRow = ({user}) => {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td> 
    </tr>
  )
}

export default UserRow;