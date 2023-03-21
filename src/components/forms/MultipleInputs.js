import React, { useState } from 'react'

const MultipleInputs = () => {
    const [fname, setFname] = useState("");    // Here "name" and "pswd" are holding the User input values
    const [emaill, setEmaill] = useState("");
    const [phonee, setPhonee] = useState("");
    const [pswd, setPswd] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { name: fname, email: emaill, phone: phonee, password: pswd, id: new Date().getTime().toString()}

        setAllEntry([ ...allEntry, newEntry]);
        console.log(allEntry);
    }
  return (
    <>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" autoComplete='off' name='firstname' id='firstname' required
                value={fname}
                onChange={(e) => setFname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" autoComplete='off' name='email' id='email' required
                value={emaill}
                onChange={(e) => setEmaill(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="number" autoComplete='off' name='phone' id='phone' required
                value={phonee}
                onChange={(e) => setPhonee(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" autoComplete='off' name='password' id='password' required
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}/>
            </div>
            <button type='submit'>Sign up</button>
        </form>

        <div>
            {
                allEntry.map((curElm) => {
                    const [name, email, id] = curElm                            // Array Destructuring
                    return (
                        <div className='showDataStyle' key={id}>        
                            {/* <p>{curElm.name}</p> */}
                            <p>{name}</p>
                            <p>{email}</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default MultipleInputs