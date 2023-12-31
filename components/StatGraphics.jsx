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
        calcPercentage(homeStats, awayStats);
    }, [homeStats, awayStats])

  return (
    <section className='w-full h-auto mt-6'>
        <div className='flex justify-between items-center w-full h-auto mb-2'>
            {/* Home Stat Value */}
            {homeStats === undefined ? (
                <p>Loading...</p>
            ) : (
                <p className='min-w-[2.5rem]'>
                    {`${homeStats}`}
                    {isPercentage ? "%" : "" }
                </p>
            )}

            {/* Stat Category */}
            {statType}

            {/* Away Stat Value */}
            {awayStats === undefined ? (
                <p>Loading...</p>
            ) : (
                <p className='min-w-[2.5rem] text-end'>
                    {`${awayStats}`}
                    {isPercentage ? "%" : "" }
                </p>
            )}
        </div>

        <div className='flex justify-center items-center mt-1 gap-x-2'>
            {/* Home Stat Bar */}
            <div className='bg-gray-400 w-[50%] h-[6px] rounded-full relative'>
                {homeStats === undefined ? (
                    <div />
                ) : (
                    <div className='bg-green-600 right-0 statGraphic' style={{ width: `${homeValue}%` }} />
                )}
            </div>

            {/* Away Stat Bar */}
            <div className='bg-gray-400 w-[50%] h-[6px] rounded-xl relative'>
                {awayStats === undefined ? (
                    <div />
                ) : (
                    <div className='bg-yellow-400 left-0 statGraphic' style={{ width: `${awayValue}%` }} />
                )}
            </div>
        </div>
    </section>
  )
}

export default StatGraphics