import {FC, memo} from 'react';
import FeaturedCard from '../../components/FeaturedCard';
import FirsTimeStocks from '../../components/FirsTimeStocks';
import InsightLanding from '../../components/InsightLanding';
import NavBar from '../../components/NavBar';

const Landing: FC = () => {
     return (
          <>
               <NavBar />
               <FeaturedCard />
               <InsightLanding />
               <FirsTimeStocks />
          </>
     );
};

export default memo(Landing);
