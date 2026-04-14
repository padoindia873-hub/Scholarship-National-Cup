import React, { useState } from 'react'
import { Card, Collapse, List } from 'antd'
import 'antd/dist/reset.css'

// Import local images
import schoolImg11 from '../../assets/school11.png'
import blockImg11 from '../../assets/block11.png'
import districtImg7 from '../../assets/district7.png'
import cupImage from "../../assets/cups.png"
import finalImg4 from '../../assets/final4.jpg'
import ruppes from '../../assets/wp4.jpg'
import k2 from '../../assets/k2.jpg'  
import k4 from '../../assets/k4.jpg'
const { Panel } = Collapse

// Flip Card Component
const FlipCard = ({ title, prizeAmount, imageSrc, prizeDetails = null, rewards = [] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flip-card-wrapper w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side - Shows Text */}
        <div className="flip-card-front">
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              🏆 WINNER 🏆
            </span>
          </div>
          
          <div className="text-6xl mb-4 animate-bounce">
            🏆
          </div>
          
          <h3 className="text-white text-xl md:text-2xl font-bold mb-3 px-4">
            {title}
          </h3>
          
          {prizeAmount && (
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg px-4 py-2 mt-2">
              <p className="text-white font-bold text-lg">
                💰 {prizeAmount}
              </p>
            </div>
          )}
          
          {prizeDetails && (
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg px-4 py-2 mt-2">
              <p className="text-white font-bold text-sm">
                {prizeDetails}
              </p>
            </div>
          )}
          
          <div className="mt-6 text-white/70 text-sm flex items-center justify-center gap-2">
            <span>👆 Hover to flip</span>
            <span className="text-lg">🔄</span>
          </div>
        </div>

        {/* Back Side - Shows Image and Rewards */}
        <div className="flip-card-back">
          <div className="absolute top-4 left-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
              🎁 PRIZE DETAILS
            </span>
          </div>
          
          {/* Support Single or Multiple Images with Equal Size */}
          {imageSrc && (
            Array.isArray(imageSrc) ? (
              <div className="flex gap-2 justify-center items-center mb-3 px-2">
                {imageSrc.map((img, i) => (
                  <div key={i} className="w-1/2 flex justify-center items-center">
                    <img
                      src={img}
                      alt={`prize-${i}`}
                      className="w-full h-28 md:h-32 object-contain rounded-lg"
                      style={{ maxHeight: '130px' }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center px-2">
                <img 
                  src={imageSrc} 
                  alt="prize"
                  className="w-full h-32 md:h-36 object-contain rounded-lg mb-2"
                />
              </div>
            )
          )}
          
          {rewards.length > 0 && (
            <div className="text-white text-left mt-2 w-full px-2">
              {rewards.map((reward, i) => (
                <p key={i} className="text-xs md:text-sm mb-1">
                  ✓ {reward}
                </p>
              ))}
            </div>
          )}
          
          <p className="text-white text-center mt-2 text-xs font-semibold">
            🎉 Congratulations! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

// Data for the 3 flip cards
const flipCardsData = [
  {
    title: 'School & College Level',
    prizeAmount: 'Rs. 1,00,000',
    prizeDetails: '1st Winner Prize',
    image: schoolImg11
  },
  {
    title: 'Block Level',
    prizeAmount: 'Rs. 2,00,000/-',
    prizeDetails: '1st, 2nd & 3rd Winners Will Go To Offline Exam',
    image: blockImg11
  },
  {
    title: 'District Level',
    prizeAmount: 'Rs. 10,00,000/-',
    prizeDetails: 'Consolation Prize for All Failure Candidates',
    image: districtImg7
  }
];

// Final Level Flip Cards Data
const finalLevelCards = [
  {
    title: '1st Prize',
    prizeAmount: '15 Crores',
    prizeDetails: 'Winner Takes All',
    image: [cupImage, ruppes],
    rewards: [
      '🏆 1 Kg Gold Trophy',
      '💰 10 Crore Cash',
      '🚗 Jaguar Car',
      '🏠 5 BHK Flat',
      '🎓 Scholarship For Abroad Study'
    ]
  },
  {
    title: '2nd Prize',
    prizeAmount: '12 Crores',
    prizeDetails: 'Runner Up',
    image: [cupImage, ruppes],
    rewards: [
      '🏆 500 gm Gold Trophy',
      '💰 8 Crore Cash',
      '🚗 Jaguar Car',
      '🏠 5 BHK Flat',
      '🎓 Scholarship For Abroad Study'
    ]
  },
  {
    title: '3rd Prize',
    prizeAmount: '10 Crores',
    prizeDetails: 'Second Runner Up',
    image: [cupImage, ruppes],
    rewards: [
      '🏆 250 gm Gold Trophy',
      '💰 6 Crore Cash',
      '🚗 Jaguar Car',
      '🏠 5 BHK Flat',
      '🎓 Scholarship For Abroad Study'
    ]
  },
  {
    title: '4th to 32nd Rankers',
    prizeAmount: '2 Crores',
    prizeDetails: 'Top Performers',
    image: [k4, ruppes],
    rewards: [
      '💰 1,00,00,000/- Cash',
      '🏠 4 BHK Flat',
      '🚙 Thar Car',
      '🥇 50 Gram Pure Gold Medal'
    ]
  },
  {
    title: '33th to 1932th Rankers',
    prizeAmount: '50 Laks',
    prizeDetails: 'All Participants',
    image: [k2, ruppes],
    rewards: [
      '💰 50,00,000/-',
      '🏠 3 BHK Flat',
      '🚗 Hyundai Exter Car',
      '🥇 20 Gram Pure Gold Medal'
    ]
  }
];

const PrizeList = () => {
  return (
    <div className="p-5 md:p-8 min-h-screen" style={{ background: "linear-gradient(145deg, #2085c0, #b84dff96)" }}>
      
      {/* Header Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-white">
        KK Padho India's Global Cup
      </h2>
      <p className="text-center text-white text-lg mb-10">
        <span className="font-bold text-yellow-300 animate-pulse">1932 Candidates</span> Will Become <span className="font-bold text-yellow-300">Crorepaties</span>
      </p>

      {/* Gradient Title Box */}
      <div className="w-full flex justify-center mt-8 mb-12">
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 px-6 py-5 rounded-xl shadow-2xl text-center hover:scale-105 transition-all duration-300 w-[90%] sm:w-[80%] md:w-[60%]">
          <h1 className="text-[22px] sm:text-[40px] md:text-[45px] font-extrabold leading-tight bg-gradient-to-r from-green-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            Level Wise Prize List
          </h1>
        </div>
      </div>

      {/* 3 Flip Cards in One Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4" style={{ maxWidth: '70rem' }}>
        {flipCardsData.map((card, index) => (
          <FlipCard
            key={index}
            title={card.title}
            prizeAmount={card.prizeAmount}
            prizeDetails={card.prizeDetails}
            imageSrc={card.image}
          />
        ))}
      </div>

      {/* Final Level Section - Direct Display without Collapse */}
      <div className="mt-16">
        {/* Label Header */}
        <div className="w-full md:w-[90%] lg:w-[85%] mx-auto mb-6">
          <div className="inline-block text-white text-base sm:text-[2rem] font-semibold px-6 py-3 shadow-lg animate-slideRight rounded-[7px]" 
               style={{ background: "linear-gradient(145deg, #5274a8, #4dffb596)" }}>
            Grand Final Level (offline)
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full md:w-[90%] lg:w-[85%] mx-auto">
          <h4 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-yellow-300 text-center">
            🎯 Top Winners 🎯
          </h4>

          {/* Final Level Cards - 5 in 1 row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
            {finalLevelCards.map((card, index) => (
              <FlipCard
                key={index}
                title={card.title}
                prizeAmount={card.prizeAmount}
                prizeDetails={card.prizeDetails}
                imageSrc={card.image}
                rewards={card.rewards}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-black/80 text-sm animate-pulse">
          India's Biggest Scholarship Competition
        </p>
      </div>
    </div>
  )
}

export default PrizeList