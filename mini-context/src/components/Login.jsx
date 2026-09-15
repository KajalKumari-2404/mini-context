import React, {useState, useContext} from 'react'
// useState input ki value store karne ke liye 
// useContext se data lene ke liye
import UserContext from '../context/UserContext' //Context ka purpose hota hai components ke beech data share karna without baar-baar props pass karna.

// Yahan hum Login naam ka functional component bana rahe hain.
function Login() {
    const [username, setUsername] = useState('') //useState('') ka matlab initial value empty string hai.
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
//UserContext ke andar jo data/functions provide kiye gaye hain, unko access karo
//{setUser} kyu? Ye destructuring hai.

// Ye function form submit/button click par chalega.
    const handleSubmit = (e) => { 
        e.preventDefault()
// //Normally HTML form submit hone par browser:Page reload kar deta hai.preventDefault() bolta hai: 
// Browser ka default submit behavior mat karo.
//  Isliye page reload nahi hoga.
        setUser({username, password}) //Hum username aur password ko ek object me bhej rahe hain.
    }


    // Component screen par kya show karega, wo yahan likhte hain.
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value) } //Jab user input ke andar kuch type/change karega, onChange chalega.
        placeholder='username' />
        {" "} 
        {/* //username or password ke bich space ke liye */}
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login