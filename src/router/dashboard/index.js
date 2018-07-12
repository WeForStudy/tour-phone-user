import DashboardPage from 'pages/dashboard'

import ShareRoutes from './share'
import HomeRoutes from './home'
import DiscoverRoutes from './discover'
import CenterRoutes from './center'

export default [
  { 
    path: '/dashboard', 
    component: DashboardPage,
    name: 'dashboard',
    children: [
      ...ShareRoutes,
      ...CenterRoutes,
      ...DiscoverRoutes,
      ...HomeRoutes,
    ],
  },
]
