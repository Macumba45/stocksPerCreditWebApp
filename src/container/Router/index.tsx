import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {FC, memo, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {getToken} from '../../services/storage';
import Landing from '../../views/Landing';
import DashboardEMP from '../../views/Dashboard EMP';
import DashboardINV from '../../views/Dashboard INV';
import Profile from '../../views/Profile';

const Router: FC = () => {
     const ProtectedRoutes = ({children}: {children: JSX.Element}) => {
          const token = getToken();
          const location = useLocation();

          if (!token || token === null) {
               return <Navigate to="/login" replace state={{from: location}} />;
          }

          return children;
     };

     const PublicRoute = ({children}: {children: JSX.Element}) => {
          const token = getToken();
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
          const token = getToken();

          useEffect(() => {
               if (token) {
                    // navigate('/feed', { replace: true });
               } else {
                    navigate('/login', {replace: true});
               }
          }, [navigate, token]);

          return (
               <div>
                    <h1>404 Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
               </div>
          );
     };

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/welcome" element={<Landing />} />
                    <Route path="/dashboardEmp" element={<DashboardEMP />} />
                    <Route path="/dashboardInv" element={<DashboardINV />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
               </Routes>
          </BrowserRouter>
     );
};

export default memo(Router);
