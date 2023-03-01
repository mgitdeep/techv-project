import React, { useEffect, useState } from 'react'

const Form = () => {

    const data = {name: "", email: "", password: ""};
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    useEffect( () => {
        console.log("Registered!")
    }, [flag])

    function handleData(e) {
        setInputData({...inputData, [e.target.name]:e.target.value})

        console.log(inputData)
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("All fields are mandatory!")
        } else {
            setFlag(true)
        }
    }
  return (
    <>
    <pre>{(flag) ? <h2 className='ui-defne'>Hello {inputData.name}, You've Registered Successfully!</h2> : ""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type="text" placeholder='Enter your name...' name='name' value={inputData.name} onChange = {handleData}/>
        </div>
        <div>
            <input type="text" placeholder='Enter your email...' name='email' value={inputData.email} onChange = {handleData}/>
        </div>
        <div>
            <input type="text" placeholder='Enter your password...' name='password' value={inputData.password} onChange = {handleData}/>
        </div>
        <div>
            <button type='submit'>Sign up</button>
        </div>
    </form>
    </>
  )
}



export default Form