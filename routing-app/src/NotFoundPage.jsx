import { useNavigate } from "react-router-dom"

export default function NotFoundPage(){

    const navigate = useNavigate()
    return(
        <div>
            <h1>Hey! You Are Lost</h1>
            <p>The page you are looking for is not found</p>


            <button onClick={()=>navigate("/")}>Go back to Homepage</button>
        </div>
    )
}
