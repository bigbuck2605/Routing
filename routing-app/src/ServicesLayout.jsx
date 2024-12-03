import { Outlet } from "react-router-dom";
import Services from "./Services.jsx";

export default function ServicesLayout(){

    return(
        <div>
            <Services />
            <Outlet />
        </div>
    )
}