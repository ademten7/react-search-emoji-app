import React from "react";
import EmojiItem from "./EmojiItem";

const EmojiContainer = (props) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "80%",
        margin: "0 auto",
      }}
    >
      {props.emojisList.map((emoji) => {
        return (
          <EmojiItem
            key={emoji.symbol}
            symbol={emoji.symbol}
            // title={emoji.title}
            // keywords={emoji.keywords}
          />
        );
      })}
    </div>
  );
};

export default EmojiContainer;
