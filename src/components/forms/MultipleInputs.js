import React, { useState } from 'react'

const MultipleInputs = () => {
    const [name, setName] = useState("")
    const [pswd, setPswd] = useState("")
  return (
    <>
        <form action="">
            <div>
                <label htmlFor="Firstname">First Name</label>
                <input type="text" autoComplete='off' name='Firstname' id='Firstname' required
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" autoComplete='off' name='email' id='email' required/>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="number" autoComplete='off' name='phone' id='phone' required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" autoComplete='off' name='password' id='password' required
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}/>
            </div>
            <button type='submit'>Sign up</button>
        </form>
    </>
  )
}

export default MultipleInputs