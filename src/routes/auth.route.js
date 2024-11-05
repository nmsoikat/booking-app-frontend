import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AuthRoutes = [
  {
    path: '/',
    component: <Login />
  },
  {
    path: '/login',
    component: <Login />
  },
  {
    path: '/signup',
    component: <Signup />
  }
]

export default AuthRoutes;