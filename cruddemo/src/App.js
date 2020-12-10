import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

//import Adduser from './components/Adduser';
//import Users from './components/Users';
//import Login from './components/Login';
//import Homepage from './components/Homepage';
//import Pagenotfound from './components/Pagenotfound'
//import Update from './components/Update';
import { Route, Switch } from 'react-router-dom';
import GuardedRoute from './GuardedRoute';

import { Suspense, lazy } from 'react';
import Pagination from './components/Pagination';
import MaterialUuTable from './components/MaterialUuTable';

const Adduser = lazy(() => import('./components/Adduser'));
const Users = lazy(() => import('./components/Users'));
const Login = lazy(() => import('./components/Login'));
const Homepage = lazy(() => import('./components/Homepage'));
const Update = lazy(() => import('./components/Update'));
const Pagenotfound = lazy(() => import('./components/Pagenotfound'));




function App() {

  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
 <Switch>
       <Route exact path='/' component={MaterialUuTable}  />

       <Route exact path='/login' component={Login}  />
       
<GuardedRoute path='/homepage' component={Homepage} auth ={localStorage.getItem("Login")} />

<GuardedRoute path='/users' component={Users} auth ={localStorage.getItem("Login")} />

<GuardedRoute path='/adduser' component={Adduser} auth ={localStorage.getItem("Login")} />    

<GuardedRoute path='/update' component={Update} auth ={localStorage.getItem("Login")} /> 

<Route  component={Pagenotfound} /> 

     
    
    
    
      </Switch>
      </Suspense>
    </>
  );
}

export default App;
