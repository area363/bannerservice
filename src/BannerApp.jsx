import React from "react";
import ReactDOM from "react-dom";
import Banner from 'react-banner'
import "./App.css";

class BannerApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="container"><div className="banner">
      <Banner
          logo= 'campaang'
          url={ window.location.pathname }
          items={[
              { "content": "Near me", "url": "/1" },
              { "content": "About", "url": "/2" },
              { "content": "Login", "url": "/3" },
              { "content": "Sign up", "url": "/4" },
              { "content": "Start hosting", "url": "/5"}
          ]} /></div></div>
  )
  }
}

ReactDOM.render(<BannerApp />, document.getElementById("banner"));
