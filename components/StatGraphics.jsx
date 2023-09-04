import React, { useEffect, useState } from 'react'

const StatGraphics = ({ homeStats, awayStats, isPercentage, statType }) => {
    const [homeValue, setHomeValue] = useState();
    const [awayValue, setAwayValue] = useState();

    const calcPercentage = (homeNum, awayNum) => {
        let total = parseFloat(homeNum) + parseFloat(awayNum);
        const initialCalc = 100 / total;
        const homePercentage = Math.round(initialCalc * homeNum);
        const awayPercentage = Math.round(initialCalc * awayNum);

        setHomeValue(homePercentage);
        setAwayValue(awayPercentage);
    };

    useEffect(() => {
        calcPercentage(homeStats.value, awayStats.value);
    }, [])

  return (
    <div>StatGraphics</div>
  )
}

export default StatGraphics