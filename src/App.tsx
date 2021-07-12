import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import UserList from "./components/UserList/UserList";
import AddUser from './components/AddUser/AddUser';
import { IState } from './UserInfo';
import Container from "@material-ui/core/Container"
const App: React.FC = () => {

  const [user, setUsers] = useState<IState["user"]>([
    {
      firstName: 'Mayank',
      lastName: 'Bhatt',
      age: 10,
      dateOfJoining: '21st June',
    },
    {
      firstName: 'Rahul',
      lastName: 'Mishra',
      age: 14,
      dateOfJoining: '22nd June',
    }
  ])


  return (
    <div className="App">
      <CssBaseline>
        <Container maxWidth="md">
          <AddUser
            user={user}
            setUsers={setUsers}
          />
          <UserList
            user={user}
            setUsers={setUsers}
          />
        </Container>
      </CssBaseline>

    </div>
  );
}
export default App;
