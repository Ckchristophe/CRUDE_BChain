import { useState } from 'react';
import { CRUD_App_backend } from 'declarations/CRUD_App_backend';
import Table from 'react-bootstrap/Table';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    CRUD_App_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <><h1>LIST ALL USERS</h1>
    <Table responsive>
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Cyiza</td>
          <td>Christophe</td>
        
        </tr>
      </tbody>
    </Table></>
    
  );
}

export default App;
