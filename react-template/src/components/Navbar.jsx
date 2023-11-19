import { Link } from "react-router-dom";

export default function Navbar(){
    return (<div>
        <span><Link to={"/"}>Home</Link> </span>
        <span><Link to={"/page1"}>page1</Link> </span>
        <span><Link to={"/page2"}>page2</Link> </span>
        <span><Link to={"/pageuseeffect"}>UseEffect</Link> </span>
    </div>)
}