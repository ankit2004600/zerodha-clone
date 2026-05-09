import React from "react";
import "./Apps.css";

const Apps = () => {
  return (
    <div className="apps-container">
      <h2 className="apps-title">Apps</h2>

      <div className="apps-grid">
        
        {/* Kite */}
        <div className="app-card">
          <img
            src="https://kite.zerodha.com/static/images/kite-logo.svg"
            alt="Kite"
            className="app-logo"
          />
          <h3>Kite</h3>
          <p>Trading platform</p>
        </div>

        {/* Console */}
        <div className="app-card">
          <img
            src="https://zerodha.com/static/images/console.svg"
            alt="Console"
            className="app-logo"
          />
          <h3>Console</h3>
          <p>Reports and analytics</p>
        </div>

        {/* Coin */}
        <div className="app-card">
          <img
            src="https://zerodha.com/static/images/coin.svg"
            alt="Coin"
            className="app-logo"
          />
          <h3>Coin</h3>
          <p>Mutual funds</p>
        </div>

        {/* Varsity */}
        <div className="app-card">
          <img
            src="https://zerodha.com/static/images/varsity.svg"
            alt="Varsity"
            className="app-logo"
          />
          <h3>Varsity</h3>
          <p>Learn trading</p>
        </div>

      </div>
    </div>
  );
};

export default Apps;