import './theme.css';
import logo from "../assets/logo.png"
import profilePicture from "../assets/profile_picture.webp";


function Navigation() {
    return (
        <nav class="navbar navbar-white bg-white">
            <div class="container-fluid" style={{ background: "white" }}>
                <a class="navbar-brand" href="#" style={{ background: "white" }}>
                    <img src={logo} alt="" height="32px" class="d-inline-block align-text-top"
                        style={{ paddingLeft: "10px", paddingBottom: "3px", background: "white" }}>
                    </img>
                </a>
                <div className="d-inline-block align-text-top" style={{ paddingRight: "10px", background: "white" }}>
                    <button className="btn btn-outline-signIn">Sign In</button>
                    <img src={profilePicture} height="32px" className="rounded-circle"></img>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;