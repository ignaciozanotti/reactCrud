import React, {useState} from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //state
  const [users,setUsers] = useState(usersData); 

  //agregar usrs
  const addUsr = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //eliminar usr
  const deleteUsr = id => {
    //console.log(id);

    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <AddUserForm addUsr={addUsr}/>
        </div>
        <div className="flex-large">
          <UserTable users={users} deleteUsr={deleteUsr}></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
