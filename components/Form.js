import React, { useState } from 'react'

const Form = () => {
     const [firstname, setFirstName] = useState('');
    // const [Lastname, setLastName] = useState('');
    // const [age, setAgeName] = useState('');
       console.log(firstname);

    function validateFormWithJS() {
        const name = document.querySelector('#name').value
        console.log(name)
        const rollNumber = document.querySelector('#rollNumber').value
    
        if (!name) {
          alert('Please enter your name.')
          return false
        }
    
        if (rollNumber.length < 3) {
          alert('Roll Number should be at least 3 digits long.')
          return false
        }
      }

    return (
        <>
            <form action="/send-data-here" method="post" onSubmit={validateFormWithJS} >
                <label for="roll">Roll Number</label>
                <input
                    type="text"
                    id="roll"
                    name="roll"
                    required
                    minlength="10"
                    maxlength="20"
                    value={firstname}
                    onChange={e=>setFirstName(e.target.value)}

                />
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"
                required 
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form
