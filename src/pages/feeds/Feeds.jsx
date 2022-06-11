import {
  BrowseFeeds,
  SuggestionArea,
  LeftArea,
  UserThumbnail,
  Username,
  Header,
  Button,
} from "./feedsComponent";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { followUser, unFollowUser } from "Redux/Reducers/userSlice";
import {setSortBy} from "Redux/Reducers/postsSlice"
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "context/theme-context";
import { getTextColor } from "utils/Functions/getColor";
import { Post, Modal } from "components";
import {getSortedPost} from "utils/Functions/getSortedPost"
import {useDocumentTitle} from "utils/hooks/useDocumentTitle";


export const Feeds = () => {
  useDocumentTitle("Feeds")
  const navigate = useNavigate();
  const { posts,sortBy } = useSelector((store) => store.posts);
  const { users } = useSelector((store) => store.users);
  const { currentUser } = useSelector((store) => store.auth);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const activeuser = users.find((user) => user._id === currentUser._id) || currentUser;
  const [sort,setSort] = useState("Latest_First")
  const optionChangeHandler = (e) =>{
    setSort(e.target.value)
  }
  useEffect(()=>{
    dispatch(setSortBy(sort))
  },[sort])
  const sortedPosts = getSortedPost(posts,sortBy)
  return (
    <>
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <div
        className="section"
        style={
          isModalOpen
            ? { pointerEvents: "none", opacity: ".5" }
            : { pointerEvents: "auto", opacity: "1" }
        }
      >
         <Button addpostBtn onClick={() => setModalOpen(true)}>
          Add Post
        </Button>
        <BrowseFeeds>
        <select value={sort}  onChange={optionChangeHandler}>
            <option value="Latest_First" >Latest First</option>
            <option value="Trending" >Trending</option>
            <option value="Oldest_First" >Oldest First</option>
          </select>
          {sortedPosts.map((post) => {
            return <Post key={post._id} post={post} setModalOpen={setModalOpen} />;
          })}
        </BrowseFeeds>
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
                    >
                      Following
                    </Button>
                  ) : (
                    <Button
                      style={{ color: getTextColor(theme) }}
                      onClick={() => dispatch(followUser(user._id))}
                    >
                      Follow
                    </Button>
                  )}
                </LeftArea>
              );
            })}
        </SuggestionArea>
       
      </div>
    </>
  );
};
