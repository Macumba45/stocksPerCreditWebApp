import { FC, memo } from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { TabContainer } from './styles';
import { TabPanel } from '@mui/joy';
import CustomImageList from '../PicturesProject/index';
import CampaignTab from '../CampaginProject'

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

const TabsDetails: FC = () => {


    const RewardsTab = () => {
        return <div>Rewards component</div>;
    };

    const FaqTab = () => {
        return <div>FAQ component</div>;
    };

    return (
        <TabContainer>
            <Tabs
                aria-label="tabs"
                defaultValue={0}
                sx={{ display: 'flex', justifyContent: 'center' }}
            >
                <TabList
                    variant="plain"
                    sx={{
                        marginBottom: '2rem',
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
                                height: 5,
                                bgcolor: '#7E1B75',
                                fontFamily: 'Roboto, sans-serif',
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
                <TabPanel
                    value={1}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {itemData.map((item) => (
                        <CustomImageList image={item.img} />
                    ))}
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
};

export default memo(TabsDetails);
