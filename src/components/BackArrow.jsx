import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function BackArrow(){
    const navigate = useNavigate();

    const returnPreviousPage = () => { navigate(-1) };

    return (
        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '1.7rem', position: 'absolute', left: '0.6rem' }} onClick={returnPreviousPage}/>
    )
}

export default BackArrow;