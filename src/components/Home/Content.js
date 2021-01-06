import React from "react";

const Content = ({ styles }) => {

  const contentStyle = {
    paddingTop: styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.footerMenuHeight + 20,
    paddingLeft: 20,
    color: styles.white(1),
    "text-align": "center"
  };

  return (
    <div style={contentStyle}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>Dawn</h2>
            <p>All your cards in one app</p>
          </div>
    </div>
  );
};

export default Content;