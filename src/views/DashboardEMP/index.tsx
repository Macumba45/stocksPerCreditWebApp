import {FC, memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '../../components/CardProjects';
import NavBarEmp from '../../components/NavbarEmp';
import {MaxContainer} from './styles';
import {Fab, Tooltip} from '@mui/material';
import {Home} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import Person4Icon from '@mui/icons-material/Person4';
import {togglePostFav} from '../../services/api/user';
import {DashboardEmpLogic} from './logic';

const DashboardEMP: FC = () => {
     const {userdata, deleteProjectUser} = DashboardEmpLogic();
     console.log(userdata);
     const navigate = useNavigate();
     const goDashboard = useCallback(() => {
          navigate('/');
     }, [navigate]);

     const goNewProject = useCallback(() => {
          navigate('/dashboard/new-project');
     }, [navigate]);

     const goProfile = useCallback(() => {
          navigate('/profile');
     }, [navigate]);

     const CustomTooltip = ({title, children}: any) => {
          return (
               <Tooltip title={title} placement="left">
                    {children}
               </Tooltip>
          );
     };

     const toggleFavorite = useCallback(async (id: string) => {
          await togglePostFav(id);
     }, []);

     return (
          <>
               <NavBarEmp />
               <CustomTooltip title="Go to Landing">
                    <Fab
                         onClick={goDashboard}
                         size="small"
                         sx={{
                              position: 'fixed',
                              bottom: '2rem',
                              right: 0,
                              marginRight: '2rem',
                              backgroundColor: '#7E1B75',
                              '&:hover': {
                                   backgroundColor: '#7e1b7655', // Cambiar color del hover
                              },
                         }}
                         color="primary"
                         aria-label="add"
                    >
                         <Home />
                    </Fab>
               </CustomTooltip>

               <CustomTooltip title="New Project">
                    <Fab
                         onClick={goNewProject}
                         size="small"
                         sx={{
                              position: 'fixed',
                              bottom: '6rem',
                              right: 0,
                              marginRight: '2rem',
                              backgroundColor: '#7E1B75',
                              '&:hover': {
                                   backgroundColor: '#7e1b7655', // Cambiar color del hover
                              },
                         }}
                         color="primary"
                         aria-label="add"
                    >
                         <AddIcon />
                    </Fab>
               </CustomTooltip>
               <CustomTooltip title="Profile">
                    <Fab
                         onClick={goProfile}
                         size="small"
                         sx={{
                              position: 'fixed',
                              bottom: '10rem',
                              right: 0,
                              marginRight: '2rem',
                              backgroundColor: '#7E1B75',
                              '&:hover': {
                                   backgroundColor: '#7e1b7655', // Cambiar color del hover
                              },
                         }}
                         color="primary"
                         aria-label="add"
                    >
                         <Person4Icon />
                    </Fab>
               </CustomTooltip>
               <MaxContainer>
                    {userdata?.map((project, index) => (
                         <div key={index}>
                              <Card
                                   id={project.id}
                                   url={project.url}
                                   showHeartButton={false}
                                   title={project.title}
                                   duration={project.duration}
                                   description={project.description}
                                   ProjectTag={project.ProjectTag}
                                   country={project.country}
                                   city={project.city}
                                   tags={[]}
                                   collected={project.totalInvest}
                                   totalInvestor={project.totalInvestor}
                                   minimuminvestment={project.minimuminvestment}
                                   goal={project.goal}
                                   limitvalue={project.limitvalue}
                                   totalInvest={project.totalInvest}
                                   toggleFav={toggleFavorite}
                                   onDelete={() =>
                                        deleteProjectUser(project.id)
                                   }
                                   deleteIcon={true}
                              />
                         </div>
                    ))}
               </MaxContainer>
          </>
     );
};

export default memo(DashboardEMP);
