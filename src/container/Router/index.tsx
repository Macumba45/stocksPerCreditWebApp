import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {FC, memo, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {getAuthenticatedToken} from '../../services/storage/token';
import Landing from '../../views/Landing';
import Profile from '../../views/Profile';
import Login from '../../views/Auth/Login';
import SignUp from '../../views/Auth/SignUp';
import NotFound404 from '../../views/NotFound404';
import Dashboard from '../../views/Dashboard';
import ProjectDetails from '../../views/ProjectDetails';
import DashboardInvestment from '../../views/DashboardInvestments/index';
import Payment from '../../views/Payment';
import DashboardFavorites from '../../views/DashboardFavorites';
import DashboardOrders from '../../views/DashboardOrders';
import ProfileEditar from '../../views/ProfileEditar';
import FormProjectNew from '../../components/FormProject';

const Router: FC = () => {
     const ProtectedRoutes = ({children}: {children: JSX.Element}) => {
          const token = getAuthenticatedToken();
          const location = useLocation();

          if (!token || token === null) {
               return <Navigate to="/login" replace state={{from: location}} />;
          }

          return children;
     };

     const PublicRoute = ({children}: {children: JSX.Element}) => {
          const token = getAuthenticatedToken();
          const location = useLocation();

          if (token) {
               if (
                    location.pathname === '/login' ||
                    location.pathname === '/signup' ||
                    location.pathname === '/'
               ) {
                    return <Navigate to="/" replace state={{from: location}} />;
               }
               return children;
          }

          return children;
     };

     const NotFound = () => {
          const navigate = useNavigate();
          const token = getAuthenticatedToken();

          useEffect(() => {
               if (token) {
                    // navigate('/feed', { replace: true });
               } else {
                    navigate('/login', {replace: true});
               }
          }, [navigate, token]);

          return <NotFound404 />;
     };

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route
                         path="/login"
                         element={
                              <PublicRoute>
                                   <Login />
                              </PublicRoute>
                         }
                    />
                    <Route
                         path="/signup"
                         element={
                              <PublicRoute>
                                   <SignUp />
                              </PublicRoute>
                         }
                    />
                    <Route
                         path="/dashboard"
                         element={
                              <ProtectedRoutes>
                                   <Dashboard />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/dashboard/investments"
                         element={
                              <ProtectedRoutes>
                                   <DashboardInvestment />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/dashboard/favorites"
                         element={
                              <ProtectedRoutes>
                                   <DashboardFavorites />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/dashboard/orders"
                         element={
                              <ProtectedRoutes>
                                   <DashboardOrders />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/projectdetails/:id"
                         element={<ProjectDetails />}
                    />
                    <Route
                         path="/dashboard/new-project"
                         element={<FormProjectNew />}
                    />
                    <Route
                         path="/payment/:id"
                         element={
                              <ProtectedRoutes>
                                   <Payment />
                              </ProtectedRoutes>
                         }
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/editprofile" element={<ProfileEditar />} />

                    <Route path="*" element={<NotFound />} />
               </Routes>
          </BrowserRouter>
     );
};

export default memo(Router);
