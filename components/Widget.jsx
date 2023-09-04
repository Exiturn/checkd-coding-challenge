"use client";

import { useEffect, useState } from "react";
import TopWidget from "./TopWidget";
import BottomWidget from "./BottomWidget"

const Widget = ({ data }) => {
  return (
    <section className="w-[25rem] h-[40rem] flex flex-col justify-center items-center">
        {!data ? <div>Loading...</div> : <TopWidget data={data} />}
        {!data ? <div>Loading...</div> : <BottomWidget data={data} />}
    </section>
  )
};

export default Widget;
