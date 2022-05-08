import { useNavigate } from "react-router-dom";

export default function Redirect() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return(
        <div>
        <h2>Thank you. Your response has been recorded</h2>
        <a href="" onClick={handleClick}>Go Back</a>
        </div>
    )
}