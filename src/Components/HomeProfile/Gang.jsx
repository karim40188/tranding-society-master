import React, { useEffect } from "react";

function Gang() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "exchange",
      theme: "light",
      backgroundColor: "rgba(255, 255, 255, 1)",
      style: "1",
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      locale: "en",
      watchlist: ["AAPL", "IBM", "TSLA", "AMD", "MSFT", "GOOG"],
      calendar: false,
      support_host: "https://www.tradingview.com",
    });
    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    container.appendChild(script);
  }, []); // التأكد من أن التأثير يحدث مرة واحدة فقط عند التحميل

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default Gang;
