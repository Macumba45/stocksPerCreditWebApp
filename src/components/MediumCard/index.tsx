import {FC, memo} from 'react';
import {Props} from './types';
import {Container} from './styles';

const MediumCard: FC<Props> = ({chart}) => {
     return <Container>{chart}</Container>;
};

export default memo(MediumCard);
