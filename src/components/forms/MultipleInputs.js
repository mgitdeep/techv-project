import React, { useState } from 'react'

const MultipleInputs = () => {
    // const [fname, setFname] = useState("");    // Here "name" and "pswd" are holding the User input values
    // const [emaill, setEmaill] = useState("");
    // const [phonee, setPhonee] = useState("");
    // const [pswd, setPswd] = useState("");


    // const [allEntry, setAllEntry] = useState([]);

    // const submitForm = (e) => {
    //     e.preventDefault();

    //     const newEntry = { name: fname, email: emaill, phone: phonee, password: pswd, id: new Date().getTime().toString()}

    //     setAllEntry([ ...allEntry, newEntry]);
    //     console.log(allEntry);
    // }

    const [userSignUpData, setUserSignUpData] = useState({
        firstname: "",
        email: "",
        phone: "",
        password: ""
    })

    const [allRecords, setAllRecords] = useState([])

    // const handleInput = (e) => {
    //     setUserSignUp(e.target.value)            Not an efficient way. You can type in the fields but as soon as you type some thing console will show you can error
    // }
    const handleInput = (e) => {
        const nameee = e.target.name
        const valuee = e.target.value
        console.log(nameee, valuee)

        setUserSignUpData({ ...userSignUpData, [nameee]: valuee })
        console.log({ ...userSignUpData, [nameee]: valuee })
    }

    // Store the user input data somewhere to show them up
    const submitForm = (e) => {
        e.preventDefault()

        // const allUserData = { ...userSignUpData, [nameee]: valuee }              - will give error: 'namee', 'valuee' is not defined - you know why it is :)
        const allUserData = { ...userSignUpData, id: new Date().getTime().toString()}

        setAllRecords([ ...allRecords, allUserData])
        console.log(allRecords)

        setUserSignUpData({firstname: "", email: "", phone: "", password: ""})
    }

  return (
    <>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" autoComplete='off' name='firstname' id='firstname' required
                value={userSignUpData.firstname}
                // onChange={e => handleInput(e)}/>
                onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" autoComplete='off' name='email' id='email' required
                value={userSignUpData.email}
                onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="number" autoComplete='off' name='phone' id='phone' required
                value={userSignUpData.phone}
                onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" autoComplete='off' name='password' id='password' required
                value={userSignUpData.password}
                onChange={handleInput}/>
            </div>
            <button type='submit'>Sign up</button>
        </form>
        
        {/* <div>
            {
                allEntry.map((curElm) => {
                    const [name, email, id] = curElm                            // Array Destructuring
                    return (
                        <div className='showDataStyle' key={id}>        
                           
                            <p>{name}</p>
                            <p>{email}</p>
                        </div>
                    )
                })
            }
        </div> */}
        <div>
            {
                allRecords.map((curElm) => {
                    // const [firstname, email] = curElm                Here Array Destructuring won't work, use OBJECT DESTRUCTURING
                    const {firstname, email, id} = curElm
                    // console.log(curElm)
                    return (
                        <div className='showDataStyle' key={id}>     
                            <p>{firstname}</p>
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