import React from "react";
import "./sidebarStatistic.css";

function SidebarStatistic({ statistic }: { statistic: any }) {
  return (
    <div className="ownerStatistic">
      <p className="titleStatistic">My statistic</p>
      <div className="statInfo">
        <div className="statWrap">
          <p>{statistic.cclub}</p>
          <div className="statIcon">
            <img src="/assets/icons/cc.png" alt="conversation club" />
            <p>Conversation club</p>
          </div>
        </div>
        <div className="statWrap">
          <p>{statistic.workShop}</p>
          <div className="statIcon">
            <img src="/assets/icons/ws.png" alt="conversation club" />
            <p>Workshop</p>
          </div>
        </div>
        <div className="statWrap">
          <p style={{ color: "red" }}>{statistic.skipped}</p>
          <div className="statIcon">
            <img src="/assets/icons/bad.png" alt="conversation club" />
            <p>Skipped</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarStatistic;
