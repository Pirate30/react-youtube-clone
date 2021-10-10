import React from "react";
import { Avatar } from "@material-ui/core";
import "./Video.css";

export default function Video({
  image,
  title,
  channel,
  views,
  timastamp,
  channelSrc,
}) {
  return (
    <div className="video">
      <img className="video_thumb" src={image} alt="" />
      <div className="video_info">
        <Avatar className="video_avatar" alt={channel} src={channelSrc} />
        <div className="video_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views . {timastamp} days ago
          </p>
        </div>
      </div>
    </div>
  );
}
