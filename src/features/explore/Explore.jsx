import { useSelector } from "react-redux";
import { Post, UserList } from "components";
import {useDocumentTitle} from "utils/hooks/useDocumentTitle";
export const Explore = () => {
  useDocumentTitle("Explore")
  const { posts } = useSelector((store) => store.posts);
  return (
      <div className="section">
        <div>
          {posts.map((post) => {
            return <Post post={post} key={post._id} />;
          })}
        </div>
        <UserList />
      </div>
  );
};
