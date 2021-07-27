import React from 'react';
import { ReactReduxContext } from 'react-redux';

const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component:Dashboard },
  { path: '/dashboard/live-tracking',exact: true, name: 'Live Tracking', component: React.lazy(()=>import('../components/live-tracking/LiveTracking')) },
  
];

export default routes
