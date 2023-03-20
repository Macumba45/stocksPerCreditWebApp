import {FC, memo} from 'react';
import NavBar from '../../components/NavBar';

const Landing: FC = () => {
     return (
          <>
               <NavBar />
               <div>PRUEBA</div>
          </>
     );
};

export default memo(Landing);
