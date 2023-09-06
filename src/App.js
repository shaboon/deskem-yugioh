import "./App.css";

import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <div className="playbox">
        <div className="PlaySpace">
          <div className="player1">
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
          </div>
          <div className="linkzone"></div>
          <div className="player2">
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
            <div className="cardspace"></div>
          </div>
        </div>
      </div>
      <div className="tracker-Space">
        <div className="lp-p1"></div>
        <div className="hand-p1"></div>
        <div className="util">
          <Coin></Coin>
          <div className="trash"></div>
          <Dice></Dice>
        </div>
        <div className="lp-p2"></div>
        <div className="hand-p2"></div>
      </div>
      <div className="search">
        <Search></Search>
        <div className="search-result"></div>
      </div>
    </div>
  );
}

export default App;
