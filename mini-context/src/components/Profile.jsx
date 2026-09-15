import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
        const {user} = useContext(UserContext) //hum data read kar rahe hain.UserContext ke andar jo data hai, usko access karo.

        if (!user) return <div>Please Login</div>

        return <div>Welcome {user.username}</div>
}

export default Profile