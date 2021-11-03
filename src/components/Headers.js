import React from "react";
import GitHubButton from "react-github-btn";

const Headers = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Search Emoji <span>&#x1F984;</span>
      </h1>
      <p>Simple React Tool for search emoji with ReactJS</p>
      <p>
        <GitHubButton
          href="https://github.com/ademten7"
          data-show-count={true}
          data-size="large"
          data-text="star"
          data-icon="octicon-star"
        >
          star
        </GitHubButton>
        <GitHubButton
          href="https://github.com/ademten7"
          data-show-count={true}
          data-size="large"
          data-text="form"
          data-icon="octicon-repo-forked"
        >
          fork
        </GitHubButton>
      </p>
    </div>
  );
};

export default Headers;
