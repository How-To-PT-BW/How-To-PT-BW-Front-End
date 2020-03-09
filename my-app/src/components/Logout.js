import React, {useContext} from 'react';
import { UserContext } from "../utilities/userContext";

function Logout(props){
    const user = useContext(UserContext);
    localStorage.removeItem("token")
    props.history.push('/login')
    user.updateUser("Please Log In!");
    user.updateLoggedIn(false);
    return(
    <div></div>
    )}

export default Logout