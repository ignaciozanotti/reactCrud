import React, {useState} from 'react';
import UserTable from './components/UserTable';


function App() {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  //state
  const [users,setUsers] = useState(usersData); 

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <UserTable users={users}></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
