import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FC, memo, useState } from 'react';
import Card from '../CardProjects';
import { ContainerProjects, MainContainer, TabDiv } from './styles';
import { LandingLogic } from './logic';

interface TabPanelProps {
     children?: React.ReactNode;
     index: number;
     value: number;
}

function TabPanel(props: TabPanelProps) {
     const { children, value, index, ...other } = props;

     return (
          <TabDiv
               role="tabpanel"
               hidden={value !== index}
               id={`simple-tabpanel-${index}`}
               aria-labelledby={`simple-tab-${index}`}
               {...other}
          >
               {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
          </TabDiv>
     );
}

function a11yProps(index: number) {
     return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
     };
}

const BasicTabs: FC = () => {
     const [value, setValue] = useState(0);

     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
          setValue(newValue);
     };

     const { landingData } = LandingLogic()
     const topProjects = landingData.topProjects
     const lastestProjects = landingData.latestProjects.slice(0, 3)
     const closeSoon = landingData.latestProjects.slice(-3)


     return (
          <MainContainer>
               <Box sx={{ margin: '0 auto', color: '#7E1B75' }}>
                    <Box
                         sx={{
                              borderBottom: 1,
                              borderColor: 'divider',
                              color: '#7E1B75',
                         }}
                    >
                         <Tabs
                              sx={{ color: '#7E1B75', indicatorColor: '#7E1B75' }}
                              value={value}
                              onChange={handleChange}
                              aria-label="basic tabs example"
                              TabIndicatorProps={{ sx: { bgcolor: '#7E1B75' } }}

                         >
                              <Tab
                                   sx={{ color: '#7E1B75', '&.Mui-selected': { color: '#7e1b76c6' } }}
                                   label="Top projects"
                                   {...a11yProps(0)}
                              />
                              <Tab
                                   sx={{ color: '#7E1B75', '&.Mui-selected': { color: '#7e1b76c6' } }}
                                   label="Recents"
                                   {...a11yProps(1)}
                              />
                              <Tab
                                   sx={{ color: '#7E1B75', '&.Mui-selected': { color: '#7e1b76c6' } }}
                                   label="Close soon"
                                   {...a11yProps(2)}
                              />
                         </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                         <ContainerProjects>
                              {topProjects.map((item, index) =>
                                   <Card
                                        key={index}
                                        url={item.url}
                                        tags={item.tags}
                                        // showHeartButton={true}
                                        title={item.title}
                                        description={item.description}
                                        country={item.country}
                                        city={item.city}
                                        totalInvest={item.totalInvest}
                                        goal={item.goal}
                                        onClick={() => console.log('prueba')}
                                   />
                              )}
                         </ContainerProjects>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                         <MainContainer>
                              <ContainerProjects>
                                   {lastestProjects.map((item, index) =>
                                        <Card
                                             key={index}
                                             url={item.url}
                                             tags={item.tags}
                                             // showHeartButton={true}
                                             totalInvest={item.totalInvest}
                                             goal={item.goal}
                                             title={item.title}
                                             description={item.description}
                                             country={item.country}
                                             city={item.city}
                                             onClick={() => console.log('prueba')}
                                        />
                                   )}
                              </ContainerProjects>
                         </MainContainer>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                         <MainContainer>
                              <ContainerProjects>
                                   {closeSoon.map((item, index) =>
                                        <Card
                                             key={index}
                                             url={item.url}
                                             tags={item.tags}
                                             // showHeartButton={true}
                                             totalInvest={item.totalInvest}
                                             goal={item.goal}
                                             title={item.title}
                                             description={item.description}
                                             country={item.country}
                                             city={item.city}
                                             onClick={() => console.log('prueba')}
                                        />
                                   )}
                              </ContainerProjects>
                         </MainContainer>
                    </TabPanel>
               </Box>
          </MainContainer>
     );
};

export default memo(BasicTabs);
