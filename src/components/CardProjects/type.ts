import {TagResponse} from '../../services/api/tag';

export type Props = {
     id: string;
     title?: string;
     description?: string;
     url?: string;
     duration?: string;
     totalInvest?: number;
     totalInvestor?: number;
     country?: string;
     city?: string;
     history?: string;
     commerce?: string;
     proposal?: string;
     images?: string;
     currency?: string;
     cost?: number;
     minimuminvestment?: number | undefined;
     actionPerCredit?: string;
     returnInvestment?: number;
     goal?: number;
     tags?: TagResponse[] | undefined;
     limitvalue?: number;
     createdAt?: Date;
     updatedAt?: Date;
     showHeartButton?: React.ReactNode;
     collected?: number;
     investors?: number;
     onClick?: () => void;
     toggleFav: (id: string) => void;
     isFavorite?: boolean;

};
