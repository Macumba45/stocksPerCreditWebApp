import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {FC, memo, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {getAuthenticatedToken} from '../../services/storage';
import Landing from '../../views/Landing';
import DashboardEMP from '../../views/DashboardEMP';
import DashboardINV from '../../views/DashboardINV';
import Profile from '../../views/Profile';
import Login from '../../views/Auth/Login';
import SignUp from '../../views/Auth/SignUp';
import DashboardProjects from '../../views/DashboardINVMyProjects/index';
import DashboardProjectsInvest from '../../views/DashboardINVMyInvestments/index';
import CreateNewProject from '../../views/NewProject/index';
import NotFound404 from '../../views/NotFound404';

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
                    return (
                         <Navigate
                              to="/feed"
                              replace
                              state={{from: location}}
                         />
                    );
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/welcome" element={<Landing />} />
                    <Route
                         path="/dashboardemp"
                         element={
                              <ProtectedRoutes>
                                   <DashboardEMP />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/dashboardemp/createproject"
                         element={
                              <ProtectedRoutes>
                                   <CreateNewProject />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/dashboardinv"
                         element={
                              <ProtectedRoutes>
                                   <DashboardINV />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/dashboardinv/projects"
                         element={
                              <ProtectedRoutes>
                                   <DashboardProjects />
                              </ProtectedRoutes>
                         }
                    />
                    <Route
                         path="/dashboardinv/investments"
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
