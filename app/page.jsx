"use client";
import Widget from "@/components/Widget";
import { useState, useEffect } from "react";
import { fetchData } from "@/utils/requests";

const WidgetPage = () => {
  const [matchData, setMatchData] = useState("");

  useEffect(() => {
    const fetchMatchData = async () => {
      const apiUrl = "https://frontend-tech-test-ashy.vercel.app/api/match";
      const res = await fetchData(apiUrl);

      setMatchData(res.match);
    };
    fetchMatchData();
  }, []);

  return (
    <div className="drop-shadow-xl">
      <Widget data={matchData} />
    </div>
  );
};

export default WidgetPage;
