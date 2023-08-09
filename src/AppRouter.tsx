import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { IssuePost } from "./pages/IssuePost";
import { DefaultLayout } from "./layouts/default";


export function AppRouter() {
  return (
    <Routes>
      
    <Route path="/" element={<DefaultLayout/>}>
   
    <Route  path='/' element={<Homepage/>} />
      <Route path='/issue/:number' element={<IssuePost/>} />
      
    </Route>
   
     
    </Routes>
  )
}