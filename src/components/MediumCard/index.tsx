import {FC, memo} from 'react';
import Chart from './chart';
import {Container} from './styles';
import {Props} from './types';

const MediumCard: FC<Props> = ({chart}) => {
     return <Container>{chart}</Container>;
};

export default memo(MediumCard);
