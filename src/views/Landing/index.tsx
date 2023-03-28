import { FC, memo } from 'react';
import BasicTabs from '../../components/BasicTabs';
import DashboardLanding from '../../components/DashboardLanding';
import FeaturedCard from '../../components/FeaturedCard';
import FirsTimeStocks from '../../components/FirsTimeStocks';
import Footer from '../../components/Footer';
import Hr from '../../components/Hr';
import InsightLanding from '../../components/InsightLanding';
import NavBar from '../../components/NavBar';
import TagsLanding from '../../components/TagsLanding';
import { LandingLogic } from './logic';

const Landing: FC = () => {

     const {
          landingData
     } = LandingLogic();


     return (
          <>
               <NavBar />
               <FeaturedCard />
               <Hr label="Stadistics" />
               <InsightLanding
                    ratioSuccess={landingData.ratioSuccess}
                    totalAmount={landingData.totalAmount}
                    totalProjects={landingData.totalProjects}
               />
               <Hr label="Login in Stocks" />
               <FirsTimeStocks />
               <Hr label="Projects" />
               <BasicTabs />
               <Hr label="Top Categories" />
               <TagsLanding />
               <Hr label="All in your Dashboard" />
               <DashboardLanding />
               <Footer />
          </>
     );
};

export default memo(Landing);
