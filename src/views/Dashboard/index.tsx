import {FC, memo, useState} from 'react';
import {UserRole} from '../../models/user';
import {getUserRole} from '../../services/storage/userRole';
import DashboardEMP from '../DashboardEMP';
import DashboardINVe from '../DashboardINV';

const Dashboard: FC = () => {
     const [userRole] = useState<UserRole>(getUserRole());
     if (userRole === UserRole.ENTREPRENEUR) {
          return <DashboardEMP />;
     } else {
          return <DashboardINVe />;
     }
};

export default memo(Dashboard);
