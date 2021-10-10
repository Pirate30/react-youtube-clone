import { Avatar } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";
import React from "react";
import "./ChannelRow.css";

export default function ChannelRow({
  image,
  channel,
  verified,
  subs,
  numVideos,
  desc,
}) {
  return (
    <div className="channelRow">
      <Avatar src={image} alt={channel} className="channelRow_logo" />
      <div className="channelRow_text">
        <h4>
          {channel} {verified && <CheckCircleOutline />}
        </h4>
        <p>
          {subs} Subscribers | {numVideos} Videos
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
