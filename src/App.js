import React, { useState } from "react";
import EmojiContainer from "./components/EmojiContainer";
import Headers from "./components/Headers";
// react import our json data automatically and we can use it
import data from "./json/emoji.json";

function App() {
  const [emojisList, setEmojisList] = useState(data);

  const searchEmoji = (e) => {
    let searchedEmojis = data.filter((emoji) =>
      emoji.keywords.includes(e.target.value)
    );
    setEmojisList(searchedEmojis);
  };

  return (
    <div className="App">
      <Headers />
      <div style={{ textAlign: "center" }}>
        <input
          style={{
            display: "inline-block",
            width: "40%",
            padding: "5px",
            borderRadius: "20px",
            outline: "none",
          }}
          onChange={searchEmoji}
          type="text"
          name="search"
        />
      </div>
      <EmojiContainer emojisList={emojisList} />
    </div>
  );
}

export default App;

//deployment steps
// 1: add homepage property in package json
//"homepage":"."
//2. install gh-pages(npm i gh-pages)
//3. add 2 more scripts into your package json file
/* "scripts":{
      ....
      "predeploy": "npm run build",
      "deploy":"gh-pages -d build"
    }
    */
//4. make sure that you have remote origin( repo is connected to github)

//5. deploy your project : npm run deploy
