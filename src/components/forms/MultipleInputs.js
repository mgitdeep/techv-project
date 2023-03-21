// SIGNUP FORM Ready To Use

import React, { useState } from 'react'

const MultipleInputs = () => {

    const [userSignUpData, setUserSignUpData] = useState({
        firstname: "",
        email: "",
        phone: "",
        password: ""
    })

    const [allRecords, setAllRecords] = useState([])

    
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
        
       
        <div>
            {
                allRecords.map((curElm) => {
                    // const [firstname, email] = curElm                Here Array Destructuring won't work, use OBJECT DESTRUCTURING
                    const {firstname, email, id} = curElm
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