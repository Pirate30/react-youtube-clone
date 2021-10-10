import React from "react";
import SidebarRow from "../sidebar-row/SidebarRow";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import {
  VideoLibrary,
  History,
  WatchLater,
  ThumbUp,
  ExpandMore,
} from "@material-ui/icons";
import SubscriptionsRounded from "@material-ui/icons/SubscriptionsRounded";
import OndemandVideoRounded from "@material-ui/icons/OndemandVideoRounded";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsRounded} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrary} />
      <SidebarRow title="History" Icon={History} />
      <SidebarRow title="Your Videos" Icon={OndemandVideoRounded} />
      <SidebarRow title="Watch Later" Icon={WatchLater} />
      <SidebarRow title="Liked" Icon={ThumbUp} />
      <SidebarRow title="More" Icon={ExpandMore} />
    </div>
  );
}
