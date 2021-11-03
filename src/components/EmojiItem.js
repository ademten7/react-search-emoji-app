import React from "react";
import ReactClipboard from "react-clipboard-simple";

const EmojiItem = (props) => {
  return (
    <ReactClipboard keyword={props.symbol}>
      <div
        style={{
          width: "200px",
          height: "200px",
          display: "grid",
          placeItems: "center",
          border: "1px solid gray",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "12px",
          margin: "10px",
          fontSize: "30px",
        }}
      >
        <h1>{props.symbol}</h1>
        {/* <p>{props.title}</p>
          <p>{props.keywords}</p> */}
      </div>
    </ReactClipboard>
  );
};

export default EmojiItem;
