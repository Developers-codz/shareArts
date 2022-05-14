import { Wrapper, TabHead, EachTab,Outlet } from "./tabComponent";
import {TabContent} from "./TabContent"
import { useState } from "react";
export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const currentStyle = {fontWeight: "700",color:"#ca2535",borderBottom:"3px solid #ca2535"}
  return (
    <Wrapper>
      <TabHead>
        <EachTab
          style={activeTab === "tab1" ?currentStyle:null}
          id="tab1"
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Posts
        </EachTab>
        <EachTab
          style={activeTab === "tab2" ?currentStyle:null}
          id="tab2"
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Liked
        </EachTab>
        <EachTab
          style={activeTab === "tab3" ?currentStyle:null}
          id="tab3"
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Saved
        </EachTab>
      </TabHead>
      <Outlet>
      <TabContent id="tab1" activeTab={activeTab}>
          <p>My Post</p>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>My Liked</p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>My saved</p>
        </TabContent>
      </Outlet>

    </Wrapper>
  );
};
