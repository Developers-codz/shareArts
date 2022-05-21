import { useSelector } from "react-redux";
import { Post } from "../../components";
export const Explore = () => {
  const { posts } = useSelector((store) => store.posts);
  return (
    <>
      <div className="section">
        <div>
          {posts.map((post) => {
            return <Post post={post} key={post._id} />;
          })}
        </div>
      </div>
    </>
  );
};
