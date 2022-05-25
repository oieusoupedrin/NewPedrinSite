import "./menu.scss";
import { Link } from "react-router-dom";


function Menu() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Whoami" >WHOAMI</Link>
        </div>    
    );

}

export default Menu