import "./App.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Navigation from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="background">
      <Navigation />
      <div className="d-flex justify-content-center">
        <div className="tweets">
          <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" />
        </div>
      </div>
    </div>
  );
}

export default App;