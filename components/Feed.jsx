import React from "react";
import FeedCard from "./FeedCard";

import { feedData } from "../public/data/feed";

const Feed = () => {
  return (
    <div className="w-full">
      {feedData.map((data) => (
        <FeedCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Feed;
