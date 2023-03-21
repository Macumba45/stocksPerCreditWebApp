import { FC, memo } from 'react';
import Card from '../../components/CardProjects';
import SidebarDashboardEMP from '../../components/SidebarDashboardEMP';
import { MaxContainer } from './styles'

const DashboardEMP: FC = () => {
    return (
        <>
            <SidebarDashboardEMP />
            <MaxContainer>
            <Card image={''}
                title={''} description={''}
                onClick={function (): void {
                    throw new Error('Function not implemented.');
                }} liked={false} />
                </MaxContainer>
        </>
    );
};

export default memo(DashboardEMP);
