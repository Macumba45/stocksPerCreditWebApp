import { FC, memo } from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { TabContainer } from './styles';
import { TabPanel } from '@mui/joy';

const TabsDetails: FC = () => {


    const CampaignTab = () => {
        return <div>Campaign component</div>;
    };

    const PicturesTab = () => {
        return <div>Pictures component</div>;
    };

    const RewardsTab = () => {
        return <div>Rewards component</div>;
    };

    const FaqTab = () => {
        return <div>FAQ component</div>;
    };


    return (

        <TabContainer>
            <Tabs aria-label="tabs" defaultValue={0}>
                <TabList
                    variant="plain"
                    sx={{
                        '--List-padding': '0px',
                        '--List-radius': '0px',
                        '--ListItem-minHeight': '48px',
                        [`& .${tabClasses.root}`]: {
                            boxShadow: 'none',
                            fontWeight: 'md',
                            fontFamily: 'Roboto',
                            [`&.${tabClasses.selected}::before`]: {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                left: 'var(--ListItem-paddingLeft)', // change to `0` to stretch to the edge.
                                right: 'var(--ListItem-paddingRight)', // change to `0` to stretch to the edge.
                                bottom: 0,
                                height: 3,
                                bgcolor: '#7E1B75',
                                fontFamily: 'Roboto, sans-serif'

                            },
                        },
                    }}
                >
                    <Tab>Campagin</Tab>
                    <Tab>Pictures</Tab>
                    <Tab>Rewards</Tab>
                    <Tab>FAQ</Tab>
                </TabList>
                <TabPanel value={0}>
                    <CampaignTab />
                </TabPanel>
                <TabPanel value={1}>
                    <PicturesTab />
                </TabPanel>
                <TabPanel value={2}>
                    <RewardsTab />
                </TabPanel>
                <TabPanel value={3}>
                    <FaqTab />
                </TabPanel>
            </Tabs>
        </TabContainer>
    );
}

export default memo(TabsDetails)