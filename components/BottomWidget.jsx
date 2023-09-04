"use client";

import StatGraphics from "./StatGraphics";
import { useState, useEffect } from "react";

const BottomWidget = ({ data }) => {
  /* Destructure Data prop */
  const { liveData } = data;
  const {
    lineups: { home, away },
  } = liveData;

  const [activePeriod, setActivePeriod] = useState("Full Time");
  const [statVal, setStatVal] = useState("value");

  const matchPeriods = [
    { id: "1", name: "Full Time", valueProp: "value" },
    { id: "2", name: "1st Half", valueProp: "fh" },
    { id: "3", name: "2nd Half", valueProp: "sh" },
  ];

  const setMatchPeriod = (periodName, valueProp) => {
    setActivePeriod(periodName);
    setStatVal(valueProp);
  };

  return (
    <section className="bg-gray-800 text-white w-full h-[70%] p-4">
      <p className="underline">Match Statistics</p>

      {/* Match Periods */}
      <div className="flex justify-center items-center mt-6 gap-x-[2rem]">
        {matchPeriods.map((period) => (
          <button
            key={period.id}
            className={`${
              activePeriod === period.name ? `timelineTabActive` : `timelineTab`
            }`}
            onClick={() => setMatchPeriod(period.name, period.valueProp)}
          >
            {period.name}
          </button>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="w-full h-[75%] mt-6">
        {/* Possession */}
        <StatGraphics
          homeStats={home.stats.find((stat) => stat.type === "possessionPercentage")[statVal]}
          awayStats={away.stats.find((stat) => stat.type === "possessionPercentage")[statVal]}
          isPercentage={true}
          statType="Possession"
        />
        {/* Shots */}
        <StatGraphics
          homeStats={home.stats.find((stat) => stat.type === "totalScoringAtt")[statVal]}
          awayStats={away.stats.find((stat) => stat.type === "totalScoringAtt")[statVal]}
          isPercentage={false}
          statType="Shots"
        />
        {/* Shots on Target */}
        <StatGraphics
          homeStats={home.stats.find((stat) => stat.type === "ontargetScoringAtt")[statVal]}
          awayStats={away.stats.find((stat) => stat.type === "ontargetScoringAtt")[statVal]}
          isPercentage={false}
          statType="Shots on Target"
        />
        {/* Corners */}
        <StatGraphics
          homeStats={home.stats.find((stat) => stat.type === "wonCorners")[statVal]}
          awayStats={away.stats.find((stat) => stat.type === "wonCorners")[statVal]}
          isPercentage={false}
          statType="Corners"
        />
      </div>
    </section>
  );
};

export default BottomWidget;
