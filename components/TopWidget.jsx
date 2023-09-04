import Image from "next/image"

import { arsenalLogo, fulhamLogo } from "@/utils/assets";

const TopWidget = ({ data }) => {
  /* Destructure Data Prop */
  const {
    liveData: { matchDetails },
    meta: { competition },
    contestant,
  } = data;

  console.log(competition);
  return (
    <section className='w-full h-[30%] flex justify-between items-center bg-white p-4'>
      {/* Teams */}
      <div className='flex flex-col gap-y-4'>
        <p className="underline">{competition.name}</p>

        {/* Home Logo */}
        <div className="flex justify-start items-center">
          <Image 
            src={arsenalLogo}
            width={35}
            height={35}
            alt="Arsenal Logo"
          />
          <p>
            {contestant.find((team) => team.position === "home").name}
          </p>
        </div>

        {/* Away Logo */}
        <div className="flex justify-start items-center">
          <Image 
            src={fulhamLogo}
            width={35}
            height={35}
            alt="Fulham Logo"
          />
          <p>
            {contestant.find((team) => team.position === "away").name}
          </p>
        </div>
      </div>
    </section>
  )
}

export default TopWidget