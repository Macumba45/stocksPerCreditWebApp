import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FC, memo, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAuthenticatedToken } from '../../services/storage/token';
import Landing from '../../views/Landing';
import Profile from '../../views/Profile';
import Login from '../../views/Auth/Login';
import SignUp from '../../views/Auth/SignUp';
import DashboardProjectsInvest from '../../views/DashboardInvestments/index';
import CreateNewProject from '../../views/NewProject/index';
import NotFound404 from '../../views/NotFound404';
import Dashboard from '../../views/Dashboard';

const Router: FC = () => {
     const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
          const token = getAuthenticatedToken();
          const location = useLocation();

          if (!token || token === null) {
               return <Navigate to="/login" replace state={{ from: location }} />;
          }

          return children;
     };

     // const PublicRoute = ({ children }: { children: JSX.Element }) => {
     //      const token = getAuthenticatedToken();
     //      const location = useLocation();

     //      if (token) {
     //           if (
     //                location.pathname === '/login' ||
     //                location.pathname === '/signup' ||
     //                location.pathname === '/'
     //           ) {
     //                return (
     //                     <Navigate
     //                          to="/welcome"
     //                          replace
     //                          state={{ from: location }}
     //                     />
     //                );
     //           }
     //           return children;
     //      }

     //      return children;
     // };

     const NotFound = () => {
          const navigate = useNavigate();
          const token = getAuthenticatedToken();

          useEffect(() => {
               if (token) {
                    // navigate('/feed', { replace: true });
               } else {
                    navigate('/login', { replace: true });
               }
          }, [navigate, token]);

          return <NotFound404 />;
     };

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/welcome" element={<Landing />} />

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
                                   <DashboardProjectsInvest />
                              </ProtectedRoutes>
                         }
                    />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
               </Routes>
          </BrowserRouter>
     );
};

export default memo(Router);
