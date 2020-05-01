import React, {useState, Fragment} from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

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

  //editar usuarios
  const[editing,setEditing] = useState(false);

  const[currentUsr,setCurrentUsr] = useState({
    id: null,
    name: '',
    username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUsr({id: user.id, name: user.name, username: user.username})
  }

  const updateUsr = (id, updatedUsr) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUsr : user)))
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

        {
          editing ? (
            <Fragment>
              <h2>Edit User</h2>
              <EditUserForm
                currentUsr={currentUsr}
                updateUsr={updateUsr}
                />
            </Fragment>

          ) : (
            <Fragment>
              <h2>Add User</h2>
              <AddUserForm addUsr={addUsr}/>
            </Fragment>
          )
        }

        

        </div>
        <div className="flex-large">
        <h2>Current Users</h2>
          <UserTable users={users}
          deleteUsr={deleteUsr}
          editRow={editRow}
          setEditing={setEditing}

          
          ></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
