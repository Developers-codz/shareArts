import { BrowseFeeds, Button } from "./feedsComponent";
import { useState, useEffect } from "react";
import { getAllUsers } from "features/user/userSlice";
import { setSortBy, setModalOpen, getAllPosts } from "features/home/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Post, UserList } from "components";
import { getSortedPost } from "utils/functions/getSortedPost";
import { useDocumentTitle } from "utils/hooks/useDocumentTitle";

export const Feeds = () => {
  useDocumentTitle("Feeds");
  const { posts, sortBy } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("Latest_First");
  const optionChangeHandler = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, []);
  useEffect(() => {
    dispatch(setSortBy(sort));
  }, [sort]);
  const sortedPosts = getSortedPost(posts, sortBy);
  return (
    <>
      <div className="section">
        <Button addpostBtn onClick={() => dispatch(setModalOpen())}>
          Add Post
        </Button>
        <BrowseFeeds>
          <select value={sort} onChange={optionChangeHandler}>
            <option value="Latest_First">Latest First</option>
            <option value="Trending">Trending</option>
            <option value="Oldest_First">Oldest First</option>
          </select>
          {sortedPosts.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </BrowseFeeds>
        <UserList />
      </div>
    </>
  );
};
