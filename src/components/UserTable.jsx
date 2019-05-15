import React from 'react';
import UserRow from './UserRow';
import Header from './TableHeader';
import { map } from 'lodash';

const users = [
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
  {id: 101, firstName: 'suraj', lastName: 'Verma'},
];

const UserTable = () => {
  return (
    <table>
      <Header />
      {
        map(users, user => (
          <UserRow user={user} />
        ))
      }  
    </table>
  )
}

export default UserTable;