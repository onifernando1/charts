import React from "react";
import "../assets/styles/home.css";
import AreaChartAny from "../components/AreaChartAny";

function Home(props) {
  return (
    <>
      <div className="home-container">
        <div className="moving-stocks-container">
          <span className="moving-left">
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>{" "}
            <span className="moving">
              AAPL 177.79 <span className="moving-percent">+0.04%</span>
            </span>
          </span>
        </div>
        <div className="key-stocks-container">
          <div className="individual-key-stock">
            <div className="key-stocks-info">
              <div>
                <div className="key-stocks-title">S&P 500</div>
                <div>$446.05</div>
              </div>
              <div className="moving-percent">-4.78 (-0.11%)</div>
            </div>
            <div className="key-chart">GRAPH</div>
          </div>
          <div className="individual-key-stock">
            <div className="key-stocks-info">
              <div>
                <div className="key-stocks-title">S&P 500</div>
                <div>$446.05</div>
              </div>
              <div className="moving-percent">-4.78 (-0.11%)</div>
            </div>
            <div className="key-chart">GRAPH</div>
          </div>
          <div className="individual-key-stock">
            <div className="key-stocks-info">
              <div>
                <div className="key-stocks-title">S&P 500</div>
                <div>$446.05</div>
              </div>
              <div className="moving-percent">-4.78 (-0.11%)</div>
            </div>
            <div className="key-chart">GRAPH</div>
          </div>
          <div className="individual-key-stock">
            <div className="key-stocks-info">
              <div>
                <div className="key-stocks-title">S&P 500</div>
                <div>$446.05</div>
              </div>
              <div className="moving-percent">-4.78 (-0.11%)</div>
            </div>
            <div className="key-chart">GRAPH</div>
          </div>
          <div className="individual-key-stock">
            <div className="key-stocks-info">
              <div>
                <div className="key-stocks-title">S&P 500</div>
                <div>$446.05</div>
              </div>
              <div className="moving-percent">-4.78 (-0.11%)</div>
            </div>
            <div className="key-chart">GRAPH</div>
          </div>
          <div className="individual-key-stock">
            <div className="key-stocks-info">
              <div>
                <div className="key-stocks-title">S&P 500</div>
                <div>$446.05</div>
              </div>
              <div className="moving-percent">-4.78 (-0.11%)</div>
            </div>
            <div className="key-chart">GRAPH</div>
          </div>
          <div className="individual-key-stock">
            <div className="key-stocks-info">
              <div>
                <div className="key-stocks-title">S&P 500</div>
                <div>$446.05</div>
              </div>
              <div className="moving-percent">-4.78 (-0.11%)</div>
            </div>
            <div className="key-chart">GRAPH</div>
          </div>
          <div className="individual-key-stock">
            <div className="key-stocks-info">
              <div>
                <div className="key-stocks-title">S&P 500</div>
                <div>$446.05</div>
              </div>
              <div className="moving-percent">-4.78 (-0.11%)</div>
            </div>
            <div className="key-chart">GRAPH</div>
          </div>
        </div>
        <div className="home-news-container">
          <div className="home-news-title">Latest News</div>
          <div className="individual-news-container">
            <div className="news-divider">
              <div className="news-image">
                <img src={require("../assets/images/cano.jpg")}></img>
              </div>
              <div className="news-information">
                <div className="news-title">
                  Cano Health Stock Plunges 46% on Going Concern Warning
                </div>
                <div>
                  Cano Health (NYSE:CANO) witnessed a dramatic decline of over
                  46% in its stock price pre-market today following the issuance
                  of a warning about its going concern status, coupled with an
                  announcement about its exploration of a potential sale. Cano
                  Health disclosed its current inadequacy of liquidity...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-most-searched-container">
          <div className="most-searched-title">Most Searched</div>
          <div className="most-searched-individual">
            <div className="most-searched-name">AAPL</div>
            <div className="most-searched-percent">+0.03%</div>
            <div className="most-searched-price">$177.79</div>
          </div>
          <div className="most-searched-individual">
            <div className="most-searched-name">AAPL</div>
            <div className="most-searched-percent">+0.03%</div>
            <div className="most-searched-price">$177.79</div>
          </div>
          <div className="most-searched-individual">
            <div className="most-searched-name">AAPL</div>
            <div className="most-searched-percent">+0.03%</div>
            <div className="most-searched-price">$177.79</div>
          </div>
          <div className="most-searched-individual">
            <div className="most-searched-name">AAPL</div>
            <div className="most-searched-percent">+0.03%</div>
            <div className="most-searched-price">$177.79</div>
          </div>
          <div className="most-searched-individual">
            <div className="most-searched-name">AAPL</div>
            <div className="most-searched-percent">+0.03%</div>
            <div className="most-searched-price">$177.79</div>
          </div>
          <div className="most-searched-individual">
            <div className="most-searched-name">AAPL</div>
            <div className="most-searched-percent">+0.03%</div>
            <div className="most-searched-price">$177.79</div>
          </div>
          <div className="most-searched-individual">
            <div className="most-searched-name">AAPL</div>
            <div className="most-searched-percent">+0.03%</div>
            <div className="most-searched-price">$177.79</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
