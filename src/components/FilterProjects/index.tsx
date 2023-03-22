import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {FC, memo, useState} from 'react';
import Card from '../CardProjects';
import {ContainerProjects, MainContainer} from './styles';

interface TabPanelProps {
     children?: React.ReactNode;
     index: number;
     value: number;
}

function TabPanel(props: TabPanelProps) {
     const {children, value, index, ...other} = props;

     return (
          <div
               role="tabpanel"
               hidden={value !== index}
               id={`simple-tabpanel-${index}`}
               aria-labelledby={`simple-tab-${index}`}
               {...other}
          >
               {value === index && (
                    <Box sx={{p: 3}}>
                         <Typography>{children}</Typography>
                    </Box>
               )}
          </div>
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

     return (
          <Box sx={{width: '350px', margin: '0 auto', color: '#7E1B75'}}>
               <Box
                    sx={{
                         borderBottom: 1,
                         borderColor: 'divider',
                         color: '#7E1B75',
                    }}
               >
                    <Tabs
                         sx={{color: '#7E1B75'}}
                         value={value}
                         onChange={handleChange}
                         aria-label="basic tabs example"
                    >
                         <Tab
                              sx={{color: '#7E1B75'}}
                              label="Top projects"
                              {...a11yProps(0)}
                         />
                         <Tab
                              sx={{color: '#7E1B75'}}
                              label="Recents"
                              {...a11yProps(1)}
                         />
                         <Tab
                              sx={{color: '#7E1B75'}}
                              label="Close soon"
                              {...a11yProps(2)}
                         />
                    </Tabs>
               </Box>
               <TabPanel value={value} index={0}>
                    {/* <MainContainer>
                    <ContainerProjects>
                        <Card />
                    </ContainerProjects>
                    <ContainerProjects>
                        <Card />
                    </ContainerProjects>
                    <ContainerProjects>
                        <Card />
                    </ContainerProjects>
                </MainContainer> */}
               </TabPanel>
               <TabPanel value={value} index={1}>
                    Item Two
               </TabPanel>
               <TabPanel value={value} index={2}>
                    Item Three
               </TabPanel>
          </Box>
     );
};

export default memo(BasicTabs);
