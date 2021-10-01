import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar"
import Dashboard from "../pages/Dashboard"
import Details from "../pages/Details"
import Login from "../pages/Login"
import NewBlog from "../pages/NewBlog"
import Profile from "../pages/Profile"
import Register from "../pages/Register"
import ForgotPassword from "../pages/ForgotPassword"
import UpdateBlog from "../pages/UpdateBlog"
import AuthProvider from '../contexts/AuthContext'
import PrivateRouter from './PrivateRouter'

function AppRouter(){
    return (
        <BrowserRouter>
            <Navbar />
            <AuthProvider>
                <Switch>
                    <PrivateRouter path="/Dashboard" component={Dashboard} />
                    <PrivateRouter path="/Details" component={Details} />
                    <Route path="/Login" component={Login} />
                    <Route path="/ForgotPassword" component={ForgotPassword} />
                    <PrivateRouter path="/NewBlog" component={NewBlog} />
                    <PrivateRouter path="/Profile" component={Profile} />
                    <Route path="/Register" component={Register} />
                    <PrivateRouter path="/UpdateBlog" component={UpdateBlog} />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    )
}
export default AppRouter ;