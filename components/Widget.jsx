"use client";

import { useEffect, useState } from "react";
import TopWidget from "./TopWidget";
import BottomWidget from "./BottomWidget"

const Widget = ({ data }) => {
    useEffect(() => {
        // console.log("data at widget level: ", data);
    }, [data])

  return (
    <section className="w-[25rem] h-[40rem] flex flex-col justify-center items-center">
        <TopWidget data={data} />
        <BottomWidget data={data} />
    </section>
  )
};

export default Widget;
