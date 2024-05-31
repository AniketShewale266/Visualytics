import React from 'react'
import { Link } from 'react-router-dom'
import myimage from '../assets/back.png'
import CharacteristicCard from './CharacteristicCard';
import card1 from '../assets/chart-simple-solid.svg'
import card2 from '../assets/question-solid.svg'
import card3 from '../assets/soap-solid.svg'
import card4 from '../assets/download-solid.svg'
import card5 from '../assets/arrow-up-right-dots-solid.svg'
import card6 from '../assets/circle-info-solid.svg'

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl bg-black">
    <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                <h2 className="text-4xl font-bold sm:text-4xl">
                Unlock Insights with <span className='text-orange-700 text-4xl font-bold sm:text-4xl'>Visualytics</span>
                <span className="hidden sm:block text-xl">Your intuitive chatbot companion for effortless transformation of raw data into actionable insights through AI-Driven Data Analysis.</span>
                </h2>

                <Link
                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                    to="/"
                >
                    &nbsp; Start Visualizing
                </Link>
            </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-96" src={myimage} alt="image1" />
        </div>
    </aside>

    <h1 className="text-center text-2xl sm:text-2xl p-10 font-medium">Save time. Make Visualyatics do your data work.</h1>
    <h1 className="text-center text-sm sm:text-lg font-medium">Turn hours of Excel into minutes on Visualyatics.</h1>

      {/* New Section: Characteristics */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Characteristic Card 1 */}
        <CharacteristicCard
          iconUrl={card1}
          title="Generate sleek visualizations"
          description="Communicate findings with confidence."
        />

        {/* Characteristic Card 2 */}
        <CharacteristicCard
          iconUrl={card2}
          title="Ask data questions"
          description="Get answers to your queries in seconds."
        />

        {/* Characteristic Card 3 */}
        <CharacteristicCard
          iconUrl={card3}
          title="Cleaning made effortless"
          description="Automate data prep and focus on what matters."
        />

        {/* Characteristic Card 4 */}
        <CharacteristicCard
          iconUrl={card4}
          title="Export instantly"
          description="Quickly download data for easy sharing."
        />

        {/* Characteristic Card 5 */}
        <CharacteristicCard
          iconUrl={card5}
          title="Create captivating animations"
          description="Bring data to life with dynamic GIFs."
        />

        {/* Characteristic Card 6 */}
        <CharacteristicCard
          iconUrl={card6}
          title="Unlock statistical modeling"
          description="Get expert-level insights without the complexity."
        />
      </div>

    <div className="m-10">

    </div>
</div>
  )
}

export default Home