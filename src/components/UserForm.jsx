import { useState } from 'react'

const UserForm = (props) => {
    const [userList, setUserList] = useState([])
    const [firstName, setFirstName] = useState("")
    const [firstError, setFirstError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastError, setLastError] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passError, setPassError] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [confPassError, setConfPassError] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        // Prevent page from reloading
        e.preventDefault()
        // Add new user to list
        setUserList([...userList, {firstName, lastName, userEmail, password, confPassword}])
        // Clear form inputs after submission
        setFirstName("")
        setLastName("")
        setUserEmail("")
        setPassword("")
        setConfPassword("")
        // Notify user that form is submitted successfully
        setHasBeenSubmitted(true)
    }

    // ERROR FUNCTIONS
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 2) {
            setFirstError("First name needs to be more than 2 characters")
        }
        else {
            setFirstError("")
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 2) {
            setLastError("Last name needs to be more than 2 characters")
        }
        else {
            setLastError("")
        }
    }

    const handleEmail = (e) => {
        setUserEmail(e.target.value)
        if(e.target.value.length < 8) {
            setEmailError("Email needs to be more than 8 characters")
        }
        else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8) {
            setPassError("Email needs to be more than 8 characters")
        }
        else {
            setPassError("")
        }
    }

    const handleConfPassword = (e, checkPassword) => {
        setConfPassword(e.target.value)
        if(e.target.value !== checkPassword) {
            setConfPassError("Passwords must match")
        }
        else {
            setConfPassError("")
        }
    }

    return (
        <>
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted?
                    <h2>Thank you for submitting the form!</h2>:
                    <h2>Welcome, please submit the form.</h2>
                }
                <div className='formBox'>
                    <label htmlFor="firstName">First Name: </label>
                    <input id="firstName" value={firstName} type="text" onChange={ handleFirstName } />
                    {
                        firstError?
                        <p>{ firstError }</p>:
                        ""
                    }
                </div>
                <div className='formBox'>
                    <label htmlFor="lastName">Last Name: </label>
                    <input id="lastName" value={lastName} type="text" onChange={ handleLastName} />
                    {
                        lastError?
                        <p>{ lastError }</p>:
                        ""
                    }
                </div>
                <div className='formBox'>
                    <label htmlFor="userEmail">Email: </label>
                    <input id="userEmail" value={userEmail} type="text" onChange={ handleEmail } />
                    {
                        emailError?
                        <p>{ emailError }</p>:
                        ""
                    }
                </div>
                <div className='formBox'>
                    <label htmlFor="password">Password: </label>
                    <input id="password" value={password} type="password" onChange={ handlePassword } />
                    {
                        passError?
                        <p>{ passError }</p>:
                        ""
                    }
                </div>
                <div className='formBox'>
                    <label htmlFor="confPassword">Confirm Password: </label>
                    <input id="confPassword" value={confPassword} type="password" onChange={ e => handleConfPassword(e, password) } />
                    {
                        confPassError?
                        <p>{ confPassError }</p>:
                        ""
                    }
                </div>
                <button>Create User</button>
            </form>
            <div>
                <h2>Users</h2>
                {
                    userList.map((user) => (
                        <div key={user.firstName}>
                            <p>{user.firstName} {user.lastName} ({user.userEmail})</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default UserForm;