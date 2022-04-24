import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Routes,
    useLocation,
  } from 'react-router-dom'
  import Landingpage from '../Pages/Landingpage'
  import Loginpage from '../Pages/Loginpage'
  import Registerpage from '../Pages/Registerpage'
  import Dashboard from '../Pages/Dashboard'
  import PasswordReset from '../Pages/Passwordreset'
  export default function AppRouter(props) {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Landingpage/>} />
            <Route exact path='/login' element={<Loginpage/>} />
            <Route exact path='/register' element={<Registerpage/>} />
            <Route exact path='/dashboard' element={<Dashboard/>} />
            <Route exact path='/reset' element={<PasswordReset/>} />
          </Routes>
        </Router>
      </>
    )
  }