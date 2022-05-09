import { useNavigate } from "react-router-dom";

export default function Redirect() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    const handleViewClick = () => {
        navigate('/view');
    }

    return(
        <div>
        <h2>Thank you. Your response has been recorded</h2>
        <a className="link-color" href="" onClick={handleClick}>Go Back</a><br/>
        <a className="link-color" href="" onClick={handleViewClick}>View</a>
        </div>
    )
}