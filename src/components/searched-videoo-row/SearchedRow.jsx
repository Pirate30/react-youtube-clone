import React from "react";
import "./SearchedRow.css";

export default function SearchedRow({
  image,
  title,
  channel,
  subs,
  views,
  timastamp,
  desc,
  channelSrc,
}) {
  return (
    <div className="searchedRow">
      <img src={image} alt={title} className="searchedRow_thumb" />
      <div className="video_text">
        <h3>{title}</h3>
        <p className="video_text_head">
          {channel} | {subs} Subscribers | {views} Views | {timastamp} ago{" "}
        </p>
        <p className="searchedRow_description">{desc}</p>
      </div>
    </div>
  );
}
