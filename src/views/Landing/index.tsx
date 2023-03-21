import { FC, memo } from 'react';
import FeaturedCard from '../../components/FeaturedCard';
import FirsTimeStocks from '../../components/FirsTimeStocks';
import InsightLanding from '../../components/InsightLanding';
import NavBar from '../../components/NavBar';
import PopularProjects from '../../components/PopularProjects';
import TagsLanding from '../../components/TagsLanding';

const Landing: FC = () => {
    return (
        <>
            <NavBar />
            <FeaturedCard />
            <InsightLanding />
            <FirsTimeStocks />
            <PopularProjects />
            <TagsLanding />


        </>
    );
};

export default memo(Landing);
