// import { useState } from 'react';

// const App = () => {
//   const initialPersons = [
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//   ];

//   const [persons, setPersons] = useState(initialPersons);
//   const [newName, setNewName] = useState('');
//   const [newNumber, setNewNumber] = useState('');
//   const [searchName, setSearchName] = useState('');

//   const handleNameChange = (event) => {
//     setNewName(event.target.value);
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value);
//   }

//   const handleSearchChange = (event) => {
//     setSearchName(event.target.value);
//   }

//   const addPerson = (event) => {
//     event.preventDefault();
//     const newPerson = { name: newName, number: newNumber, id: persons.length + 1 };
    
//     if (persons.some(person => person.name === newName)) {
//       alert(`${newName} is already added to the phonebook`);
//       return;
//     }
    
//     setPersons([...persons, newPerson]);
//     setNewName('');
//     setNewNumber('');
//   }

//   const filteredPersons = persons.filter(person =>
//     person.name.toLowerCase().includes(searchName.toLowerCase())
//   );

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <div>
//         Search by Name: <input type="text" value={searchName} onChange={handleSearchChange} />
//       </div>
//       <form onSubmit={addPerson}>
//         <div>
//           Name: <input type="text" value={newName} onChange={handleNameChange} />
//         </div>
//         <div>
//           Number: <input type="text" value={newNumber} onChange={handleNumberChange} />
//         </div>
//         <div>
//           <button type="submit">Add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <ul>
//         {filteredPersons.map((person) => (
//           <li key={person.id}>
//             {person.name} - {person.number}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from 'react';
import axios from 'axios';
// Component for filtering/searching


const Filter = ({ searchName, handleSearchChange }) => (
  <div>
    Search by Name: <input type="text" value={searchName} onChange={handleSearchChange} />
  </div>
);

// Component for adding a new person
const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => (
  <form onSubmit={addPerson}>
    <div>
      Name: <input type="text" value={newName} onChange={handleNameChange} />
    </div>
    <div>
      Number: <input type="text" value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
);

// Component for rendering all people from the phonebook
const Persons = ({ persons, searchName }) => (
  <ul>
    {persons
      .filter((person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
      )
      .map((person) => (
        <li key={person.id}>
          {person.name} - {person.number}
        </li>
      ))}
  </ul>
);

const App = () => {
  const initialPersons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ];

  const [persons, setPersons] = useState(initialPersons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        console.log(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber, id: persons.length + 1 };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons([...persons, newPerson]);
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} searchName={searchName} />
    </div>
  );
};

export default App;
