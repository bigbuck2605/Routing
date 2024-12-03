import { Outlet } from "react-router-dom";

export default function JobsLayout(){
    return(
        <div>
            <h2>See All Our Job Openings Below</h2>
            <Outlet/>
        </div>
    )
}