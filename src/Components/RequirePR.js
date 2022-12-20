import { Navigate } from "react-router-dom";
import { useAuth } from "./PrivateRoute";

export const RequirePR = ({children}) => {
    const auth =  useAuth()

    if(!auth.user) {
        return <Navigate to='/login' />
    }

    return children;
}
