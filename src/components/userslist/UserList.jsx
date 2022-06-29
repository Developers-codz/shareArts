import React from "react";
import {
  SuggestionArea,
  LeftArea,
  UserThumbnail,
  Username,
  Header,
  Button,
} from "features/home/pages/feedsComponent";
import { followUser, unFollowUser } from "features/user/userSlice";
import { getTextColor } from "utils/functions/getColor";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "context/theme-context";
import { useNavigate } from "react-router-dom";

export const UserList = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, isFollowUnfollow } = useSelector((store) => store.users);
  const { currentUser } = useSelector((store) => store.auth);
  const activeuser =
    users.find((user) => user._id === currentUser._id) || currentUser;
  return (
    <SuggestionArea>
      <Header>Suggestions For you </Header>
      {users
        .filter((user) => user._id !== currentUser._id)
        .map((user) => {
          return (
            <LeftArea m_md key={user._id}>
              {" "}
              <UserThumbnail
                src={user.userPhoto}
                onClick={() => navigate(`${user.username}`)}
              />
              <Username>{user.username}</Username>
              {activeuser.following.some(
                (followingUser) => followingUser._id === user._id
              ) ? (
                <Button
                  style={{ color: getTextColor(theme) }}
                  onClick={() => dispatch(unFollowUser(user._id))}
                  disabled={isFollowUnfollow}
                >
                  Following
                </Button>
              ) : (
                <Button
                  style={{ color: getTextColor(theme) }}
                  onClick={() => dispatch(followUser(user._id))}
                  disabled={isFollowUnfollow}
                >
                  Follow
                </Button>
              )}
            </LeftArea>
          );
        })}
    </SuggestionArea>
  );
};
