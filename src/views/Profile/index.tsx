import {FC, memo} from 'react';
import NavBar from '../../components/NavBar';

const Profile: FC = () => {
     return (
          <>
               <NavBar />
               <div>Profile</div>
          </>
     );
};

export default memo(Profile);
