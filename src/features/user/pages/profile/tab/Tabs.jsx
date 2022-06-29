import { Wrapper, TabHead, EachTab,Outlet } from "./tabComponent";
import {TabContent} from "./TabContent"
import { useState } from "react";
import { Post } from "components";
import {useSelector} from "react-redux"

export const Tabs = ({isCurrentUser,postOfUser}) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const currentStyle = {fontWeight: "700",color:"#ca2535",borderBottom:"3px solid #ca2535"}
  const bookmarked = useSelector(store => store.posts.bookmarked)
  const allPosts = useSelector(store => store.posts.posts)
  const {currentUser} = useSelector(store => store.auth);
  const {users} = useSelector(store => store.users)

  const allBookmarked = allPosts.filter((post) =>{
    return bookmarked.some((bookmark) => {
      return bookmark._id === post._id
    })
  })
const getAllLiked = allPosts.filter(post => {
  return post.likes.likedBy.some(liked => liked._id == currentUser._id)
})
const getAllPost = allPosts.filter((post)=>{
  return users.some(user => user.username === post.username)
})
  return (
    <Wrapper>
      <TabHead>
        <EachTab
          style={activeTab === "tab1" ? currentStyle:null}
          id="tab1"
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Posts
        </EachTab>
       {isCurrentUser && (
         <>
          <EachTab
          style={activeTab === "tab2" ? currentStyle:null}
          id="tab2"
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Liked
        </EachTab>
        <EachTab
          style={activeTab === "tab3" ? currentStyle:null}
          id="tab3"
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Saved
        </EachTab>
        </>
       )}
      </TabHead>
      <Outlet>
      <TabContent id="tab1" activeTab={activeTab}>
         {postOfUser.map(post => <Post key={post._id} post={post}/>)}
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
        {getAllLiked.map((item) => {
           return (
            <Post key={item._id} post={item} />
           )
         })}
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
         {allBookmarked.map((item) => {
           return (
            <Post key={item._id} post={item} />
           )
         })}
        </TabContent>
      </Outlet>

    </Wrapper>
  );
};
