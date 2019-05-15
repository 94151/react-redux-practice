import React, { Component} from 'react'
import { map }  from 'lodash';
import UserTable from './UserTable';

class UserList extends Component {
  render() {
    return (
     <div>
      <UserTable />
     </div>
    )
  }
}

export default UserList;