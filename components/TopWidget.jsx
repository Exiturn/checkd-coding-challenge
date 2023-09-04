import Image from "next/image"

const TopWidget = ({ data }) => {
  /* Destructure Data Prop */
  const {
    liveData: { matchDetails },
    meta: { competition },
    contestant,
  } = data;

  console.log(competition);
  return (
    <div className='w-full h-[30%] flex justify-between items-center bg-white p-4'>
      TopWidget
      {/* Teams */}
      <div className='flex flex-col gap-y-4'>
        <p>{competition.name}</p>

        {/* Home Logo */}
        <div>
        </div>
      </div>
    </div>
  )
}

export default TopWidget