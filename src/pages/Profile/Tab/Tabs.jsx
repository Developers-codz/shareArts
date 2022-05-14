import { Wrapper, TabHead, EachTab,Outlet } from "./tabComponent";
import { useState } from "react";
export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab1");
  return (
    <Wrapper>
      <TabHead>
        <EachTab
          style={activeTab === "tab1" ?{fontWeight: "700",color:"#ca2535"}:null}
          id="tab1"
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Posts
        </EachTab>
        <EachTab
          style={activeTab === "tab2" ?{fontWeight: "700",color:"#ca2535"}:null}
          id="tab2"
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Liked
        </EachTab>
        <EachTab
          style={activeTab === "tab3" ?{fontWeight: "700",color:"#ca2535"}:null}
          id="tab3"
          onClick={(e) => setActiveTab(e.target.id)}
        >
          Saved
        </EachTab>
      </TabHead>
      <Outlet></Outlet>

    </Wrapper>
  );
};
