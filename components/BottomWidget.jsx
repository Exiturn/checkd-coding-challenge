const BottomWidget = ({ data }) => {
  /* Destructure Data prop */
  const { liveData } = data;
  const { lineups: { home, away } } = liveData;

  // console.log(home);
  return (
    <section className="bg-gray-800 text-white w-full h-[70%] p-4">
      <p className="underline">Match Statistics</p>

      {/* Match Periods */}
      <div className="flex justify-center items-center mt-8 gap-x-[2rem]">
        <button className="w-[5.5rem] bg-yellow-400 text-black hover:text-white hover:bg-gray-600 transition-colors duration-400 ease-in-out px-4 py-2 rounded-full">Full Time</button>
        <button className="w-[5.5rem] bg-gray-900 text-white hover:bg-gray-600 transition-colors duration-400 ease-in-out px-4 py-2 rounded-full">1st Half</button>
        <button className="w-[5.5rem] bg-gray-900 text-white hover:bg-gray-600 transition-colors duration-400 ease-in-out px-4 py-2 rounded-full">2nd Half</button>
      </div>
    </section>
  )
}

export default BottomWidget