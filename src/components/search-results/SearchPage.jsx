import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "../channel-row/ChannelRow";
import SearchedRow from "../searched-videoo-row/SearchedRow";
import "./SearchPage.css";

export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPaage_filter">
        <TuneOutlined />
        <h2>Filter</h2>
      </div>
      <hr />
      {/* channel row */}
      <ChannelRow
        image="https://www.tubics.com/wp-content/uploads/2018/10/how-to-create-youtube-thumbnails-1.png"
        channel="channel 1"
        verified
        subs="500k"
        numVideos="1k"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
      />
      <hr />

      <SearchedRow
        image="https://www.tubics.com/wp-content/uploads/2018/10/how-to-create-youtube-thumbnails-1.png"
        title="title 1"
        channel="channel 1"
        subs="500k"
        views="40"
        timastamp="3:30"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        channelSrc="https://www.seekpng.com/png/detail/211-2112279_bandits-pinterest-logos-drawings-best-clan-logo.png"
      />

      <SearchedRow
        image="https://www.tubics.com/wp-content/uploads/2018/10/how-to-create-youtube-thumbnails-1.png"
        title="title 1"
        channel="channel 1"
        subs="500k"
        views="40"
        timastamp="3:30"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        channelSrc="https://www.seekpng.com/png/detail/211-2112279_bandits-pinterest-logos-drawings-best-clan-logo.png"
      />

      <SearchedRow
        image="https://www.tubics.com/wp-content/uploads/2018/10/how-to-create-youtube-thumbnails-1.png"
        title="title 1"
        channel="channel 1"
        subs="500k"
        views="40"
        timastamp="3:30"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        channelSrc="https://www.seekpng.com/png/detail/211-2112279_bandits-pinterest-logos-drawings-best-clan-logo.png"
      />

      <SearchedRow
        image="https://www.tubics.com/wp-content/uploads/2018/10/how-to-create-youtube-thumbnails-1.png"
        title="title 1"
        channel="channel 1"
        subs="500k"
        views="40"
        timastamp="3:30"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        channelSrc="https://www.seekpng.com/png/detail/211-2112279_bandits-pinterest-logos-drawings-best-clan-logo.png"
      />

      <SearchedRow
        image="https://www.tubics.com/wp-content/uploads/2018/10/how-to-create-youtube-thumbnails-1.png"
        title="title 1"
        channel="channel 1"
        subs="500k"
        views="40"
        timastamp="3:30"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        channelSrc="https://www.seekpng.com/png/detail/211-2112279_bandits-pinterest-logos-drawings-best-clan-logo.png"
      />

      <SearchedRow
        image="https://www.tubics.com/wp-content/uploads/2018/10/how-to-create-youtube-thumbnails-1.png"
        title="title 1"
        channel="channel 1"
        subs="500k"
        views="40"
        timastamp="3:30"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        channelSrc="https://www.seekpng.com/png/detail/211-2112279_bandits-pinterest-logos-drawings-best-clan-logo.png"
      />
    </div>
  );
}
