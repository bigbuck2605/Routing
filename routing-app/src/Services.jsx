import { useNavigate } from "react-router-dom"


export default function Services(){

    const navigate = useNavigate()

    return(
        <div>
            <h1>This is the SERVICES page</h1>
            <button onClick={()=>navigate('general')}>General Services</button>
            <button onClick={()=>navigate('private')}>Private Services</button>
        </div>
    )
}