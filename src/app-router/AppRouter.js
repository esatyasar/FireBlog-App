import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar"

import Dashboard from "../pages/Dashboard"
import Details from "../pages/Details"
import Login from "../pages/Login"
import NewBlog from "../pages/NewBlog"
import Profile from "../pages/Profile"
import Register from "../pages/Register"
import UpdateBlog from "../pages/UpdateBlog"

function AppRouter(){
    return (
        <BrowserRouter>
            <Navbar />
            
            <Switch>
                 <Route path="/Dashboard" exact component={Dashboard} />
                 <Route path="/Details" exact component={Details} />
                 <Route path="/Login" exact component={Login} />
                 <Route path="/NewBlog" exact  component={NewBlog} />
                 <Route path="/Profile" exact component={Profile} />
                 <Route path="/Register" exact component={Register} />
                 <Route path="/UpdateBlog" exact component={UpdateBlog} />
            </Switch>
        </BrowserRouter>
    )
}
export default AppRouter ;