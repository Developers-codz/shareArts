import axios from "axios"
    export const setFollowUser = (state, action) => {
        state.isFollowUnfollow = false;
          if (action.payload !== undefined) {
            state.users = state.users.map((user) => {
              if (user._id === action.payload.followUser._id) {
                return action.payload.followUser;
              } else if (user._id === action.payload.user._id) {
                return action.payload.user;
              } else return user;
            });
          }
        };

        export const getUserData = () => axios.get("/api/users");
        export const postFollowUser = (id,encodedToken) => axios.post(
          ` /api/users/follow/${id}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );

        export const postUnfollowUser = (id,encodedToken) =>axios.post(
          ` /api/users/unfollow/${id}`,
          {},
          { headers: { authorization: encodedToken } }
        );
        export const postEditUser = (userData,encodedToken) => axios.post(
          "/api/users/edit",
          { userData },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        