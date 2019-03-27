import Home from '../views/Home'
import Users from '../views/Users'
import Bills from '../views/Bills'
import Income from '../views/Income'

export const DashboardRoutes = [
    {
        path: '/',
        exact: true,
        component: Home,
        name: 'Home'
    },
    {
        path: '/users',
        exact: true,
        component: Users,
        name: 'Users'
    },
    {
        path: '/bills',
        exact: true,
        component: Bills,
        name: 'Bills'
    },
    {
        path: '/income',
        exact: true,
        component: Income,
        name: 'Income'
    },

];