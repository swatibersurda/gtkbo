import {Routes,Route} from "react-router-dom";
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    )
}