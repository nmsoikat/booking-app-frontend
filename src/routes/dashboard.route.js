import Dashboard from "../pages/admin/Dashboard";
import AdminEventList from "../pages/admin/EventList";

const DashboardRoutes = [
  {
    path: '/',
    component: <Dashboard />
  },
  {
    path: '/events',
    component: <AdminEventList />
  }
]

export default DashboardRoutes;