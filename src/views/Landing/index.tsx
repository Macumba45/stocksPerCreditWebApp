import { FC, memo } from 'react';
import FeaturedCard from '../../components/FeaturedCard';
import NavBar from '../../components/NavBar';

const Landing: FC = () => {
    return (
        <>
            <NavBar />
            <FeaturedCard />
        </>
    );
};

export default memo(Landing);
