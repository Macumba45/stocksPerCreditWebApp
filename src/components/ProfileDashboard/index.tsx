import { FC, memo } from "react";
import Search from "../Search";
import UserAvatar from "../Avatar/Index";
import { MainContainer, SearchContainer } from "./styles";



const ProfileDashboard: FC = () => {

    return (

        <MainContainer>
            <SearchContainer>
                <Search />
            </SearchContainer>
            <UserAvatar />
        </MainContainer>
    )
}


export default memo(ProfileDashboard)