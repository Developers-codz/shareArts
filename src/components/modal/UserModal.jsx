import React from "react";
import { UserModalWrapper,NoUserText } from "./modalComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  LeftArea,
  UserThumbnail,
  Username,
} from "features/home/pages/feedsComponent";
import { useNavigate } from "react-router-dom";
import { getSearchedUser } from "utils/functions/getSearchedUser";
import {setSearchedText} from "features/user/userSlice"
import { useTheme } from "context/theme-context";

export const UserModal = () => {
  const { users, searchedText } = useSelector(
    (store) => store.users
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchedUser = getSearchedUser(users, searchedText);
  const {theme} = useTheme()

  return (
    <UserModalWrapper className={theme==="dark" ? "active" : ""}>
       

      
      {!searchedUser.length ? (
        <NoUserText>No Such User Found</NoUserText>
      ) : (
        searchedUser.map((user) => {
          return (
            <>
              <LeftArea m_md user_modal key={user._id} onClick={() => {
                    navigate(`${user.username}`);
                    dispatch(setSearchedText(""));
                  }} >
                {" "}
                <UserThumbnail
                  src={user.userPhoto}
                />
                <Username>{user.username}</Username>
              </LeftArea>
            </>
          );
        })
      )}
    
    </UserModalWrapper>
  );
};
