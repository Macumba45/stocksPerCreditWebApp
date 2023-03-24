import {FC, memo} from 'react';
import ResponsiveDrawer from '../../components/SidebarDashboardINV';
import {
     Container,
     MinMaxContainer,
     DateContainer,
     TagDiv,
     FiltersDiv,
} from './styles';
import {FinishDatePickers, StartDatePickers} from '../../components/DatePicker';
import {
     MaxDiscreteSlider,
     MinDiscreteSlider,
} from '../../components/MoneySlider';
import Search from '../../components/Search';
import {DiscreteSlider} from '../../components/StocksSlider';

const DashboardINVe: FC = () => {
     return (
          <>
               <Container>
                    <ResponsiveDrawer />
                    <MinMaxContainer>
                         <FiltersDiv>
                              <MinDiscreteSlider></MinDiscreteSlider>
                              <MaxDiscreteSlider></MaxDiscreteSlider>
                         </FiltersDiv>
                    </MinMaxContainer>

                    <DateContainer>
                         <FiltersDiv>
                              <StartDatePickers></StartDatePickers>
                              <FinishDatePickers></FinishDatePickers>
                         </FiltersDiv>
                    </DateContainer>

                    <TagDiv>
                         <FiltersDiv>
                              <Search></Search>
                              <DiscreteSlider></DiscreteSlider>
                         </FiltersDiv>
                    </TagDiv>
               </Container>
          </>
     );
};

export default memo(DashboardINVe);
