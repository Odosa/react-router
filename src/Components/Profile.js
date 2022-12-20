import { useNavigate } from 'react-router-dom'
import { useAuth } from './PrivateRoute'

export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    
    return (
        <div class='App'>
            <label>
                Welcome {auth.user}
                <button onClick={handleLogout}>Logout</button>
            </label>
        </div>
    )
}