import './theme.css';
import logo from "../assets/logo.png";
import profilePicture from "../assets/profile_picture.webp";
import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();

    const handleSignUpLogIn = () => {
        navigate('/question');
    };

    return (
        <nav className="navbar navbar-white bg-white">
            <div className="container-fluid" style={{ background: "white" }}>
                <a className="navbar-brand" href="/" style={{ background: "white" }}>
                    <img src={logo} alt="" height="32px" className="d-inline-block align-text-top"
                        style={{ paddingLeft: "10px", paddingBottom: "3px", background: "white" }}>
                    </img>
                </a>
                <div className="d-inline-block align-text-top" style={{ paddingRight: "10px", background: "white" }}>
                    <button className="btn btn-outline-signIn" onClick={handleSignUpLogIn}>Sign Up / Log In</button>
                    <img src={profilePicture} height="32px" className="rounded-circle"></img>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;