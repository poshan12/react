import React from "react";
import Vimeo from "@u-wave/react-vimeo";

export default function App() {
  const myCallback = () => console.log("Video has ended");

  return (
    <div className="App">
      <Vimeo video="347119375" autoplay onEnd={() => myCallback()} />
    </div>
  );
}
