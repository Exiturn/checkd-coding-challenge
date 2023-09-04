"use client";

import StatGraphics from "./StatGraphics";
import { useState, useEffect } from "react";

const BottomWidget = ({ data }) => {
  /* Destructure Data prop */
  const { liveData } = data;
  const {
    lineups: { home, away },
  } = liveData;

  const [activePeriod, setActivePeriod] = useState();
  const [statVal, setStatVal] = useState("fh");

  const matchPeriods = [
    { id: "1", name: "Full Time", valueProp: "value" },
    { id: "2", name: "1st Half", valueProp: "fh" },
    { id: "3", name: "2nd Half", valueProp: "sh" },
  ];

  const setMatchPeriod = ( periodName, valueProp ) => {
    console.log(periodName, valueProp);
    setActivePeriod(periodName);
  };

  useEffect(() => {
    // console.log(
    //   "home, ",
    //   home.stats.find((stat) => stat.type === "possessionPercentage")[
    //     matchPeriods[0].valueProp
    //   ]
    // );
  }, []);

  useEffect(() => {
    console.log("isFulltime: ", activePeriod);
  }, [activePeriod]);

  return (
    <section className="bg-gray-800 text-white w-full h-[70%] p-4">
      <p className="underline">Match Statistics</p>

      {/* Match Periods */}
      <div className="flex justify-center items-center mt-6 gap-x-[2rem]">
        {matchPeriods.map((period) => (
          <button
            key={period.id}
            className={`${activePeriod === period.name ? `timelineTabActive` : `timelineTab`}`}
            onClick={() => setMatchPeriod(period.name, period.valueProp)}
          >
            {period.name}
          </button>
        ))}
        {/* <button className={`${isFulltime ? `timelineTabActive` : `timelineTab`}`} onClick={() => setIsFulltime(!isFulltime)}>Full Time</button>
        <button className={`timelineTab`} onClick={() => setIsFirstHalf(true)}>1st Half</button>
        <button className="timelineTab">2nd Half</button> */}
      </div>

      {/* Statistics Section */}
      <div className="w-full h-[75%] mt-6">
        {/* Possession */}
        <StatGraphics
          homeStats={home.stats.find(
            (stat) => stat.type === "possessionPercentage"
          )}
          awayStats={away.stats.find(
            (stat) => stat.type === "possessionPercentage"
          )}
          isPercentage={true}
          statType="Possession"
        />
        {/* Shots */}
        <StatGraphics 
          homeStats={home.stats.find((stat) => stat.type === "totalScoringAtt")}
          awayStats={away.stats.find((stat) => stat.type === "totalScoringAtt")}
          isPercentage={false}
          statType="Shots"
        />
        {/* Shots on Target */}
        <StatGraphics 
          homeStats={home.stats.find((stat) => stat.type === "ontargetScoringAtt")}
          awayStats={away.stats.find((stat) => stat.type === "ontargetScoringAtt")}
          isPercentage={false}
          statType="Shots on Target"
        />
        {/* Corners */}
        <StatGraphics 
          homeStats={home.stats.find((stat) => stat.type === "wonCorners")}
          awayStats={away.stats.find((stat) => stat.type === "wonCorners")}
          isPercentage={false}
          statType="Corners"
        />
      </div>
    </section>
  );
};

export default BottomWidget;
