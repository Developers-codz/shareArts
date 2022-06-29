import React from "react";
import { UserModalWrapper } from "./modalComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  LeftArea,
  UserThumbnail,
  Username,
} from "features/home/pages/feedsComponent";
import { useNavigate } from "react-router-dom";
import { getSearchedUser } from "utils/functions/getSearchedUser";
import {setSearchedText} from "features/user/userSlice"

export const UserModal = () => {
  const { users, searchedText } = useSelector(
    (store) => store.users
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchedUser = getSearchedUser(users, searchedText);

  return (
    <UserModalWrapper>
      {!searchedUser.length ? (
        <div>No User Found</div>
      ) : (
        searchedUser.map((user) => {
          return (
            <>
              <LeftArea m_md key={user._id}>
                {" "}
                <UserThumbnail
                  src={user.userPhoto}
                  onClick={() => {
                    navigate(`${user.username}`);
                    dispatch(setSearchedText(""));
                  }}
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
