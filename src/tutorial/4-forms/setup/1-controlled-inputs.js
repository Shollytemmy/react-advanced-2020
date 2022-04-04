import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()

    if (firstName && email) {
      const person = {
        firstName: firstName,
        email: email,
        id: new Date().getTime().toString()
      }

      // setPeople(people.concat(person))
      setPeople((people) =>{
        return [...people, person]
      })

      setFirstName("");
      setEmail('')

     

    } else{
      console.log('empty feild')
    }

  }

  const handleRemove = (id) =>{

    const persons = people.filter((person) => person.id !== id)

    setPeople(persons)

  }
  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">FirstName : </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Sumbit</button>
      </form>

      {people.map((person) => {
        const { firstName, email, id } = person;

        return (
          <>
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <h4>{email}</h4>
              <button onClick={() => handleRemove(id)}>remove</button>
            </div>
          </>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear
      </button>
    </article>
  );
};

export default ControlledInputs;
