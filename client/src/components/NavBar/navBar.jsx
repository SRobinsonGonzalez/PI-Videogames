import { Link } from "react-router-dom";

const NavBar = ({id}) => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/form">Form</Link>
        </div>
    )
};

export default NavBar;