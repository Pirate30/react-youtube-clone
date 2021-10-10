import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <div className="header_container_left">
        <MenuIcon />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="logo"
            className="header_logo"
          />
        </Link>
      </div>

      <div className="header_container_middle">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="header_container_middle_search_icon" />
        </Link>
      </div>

      <div className="header_container_right">
        <VideoCallIcon className="header_container_right_icon" />
        <AppsIcon className="header_container_right_icon" />
        <NotificationsIcon className="header_container_right_icon" />
        <Avatar className="header_container_right_icon" />
      </div>
    </div>
  );
}
