import React, { useState } from "react";
import { Modal } from "antd";
import "antd/dist/reset.css";

import schoolImg11 from "../../assets/school11.png";
import blockImg11 from "../../assets/block11.png";
import districtImg7 from "../../assets/district7.png";
import cupImage from "../../assets/cups.png";
import finalImg4 from "../../assets/final4.jpg";
import ruppes from "../../assets/wp4.jpg";

// Flip Card Component for Final Winners
const FlipWinnerCard = ({ winner }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flip-card-wrapper w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side - Prize Info */}
        <div className={`flip-card-front bg-gradient-to-br ${winner.gradient}`}>
          <div className="absolute top-2 right-2">
            <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
              🏆 PRIZE 🏆
            </span>
          </div>
          <div className="text-5xl mb-2">{winner.icon}</div>
          <h3 className="text-white font-bold text-lg mb-1">{winner.rank}</h3>
          <div className="text-2xl font-black text-white my-2">{winner.amount}</div>
          <div className="mt-3 text-white/70 text-xs flex items-center justify-center gap-1">
            <span>👆 Hover to flip</span>
            <span className="text-base">🔄</span>
          </div>
        </div>

        {/* Back Side - Rewards List */}
        <div className={`flip-card-back bg-gradient-to-br ${winner.gradient}`}>
          <div className="absolute top-2 left-2">
            <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              🎁 REWARDS 🎁
            </span>
          </div>
          <div className="text-center w-full px-2">
            <h4 className="text-white font-bold text-sm mb-2">Prize Includes:</h4>
            <div className="space-y-1">
              {winner.rewards.map((reward, i) => (
                <p key={i} className="text-white/90 text-xs flex items-center gap-1">
                  <span>✓</span> {reward}
                </p>
              ))}
            </div>
          </div>
          <p className="text-white text-center mt-3 text-[10px] font-semibold">
            🎉 Congratulations! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

const AllPrizeExam = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openImageModal = (img) => {
    setSelectedImage(img);
    setModalVisible(true);
  };

  // First 3 Cards Data
  const firstThreeCards = [
    {
      title: "School & College Level (Online)",
      winner: "1st Winner will get Rs. 1,00,000",
      icon: "🎓",
      gradient: "from-blue-500 to-cyan-500",
      image: schoolImg11,
      description: "Online Examination"
    },
    {
      title: "Block Level (Online)",
      prize: "1st, 2nd & 3rd Winners: Rs. 2,00,000/-",
      icon: "🏘️",
      gradient: "from-purple-500 to-pink-500",
      image: blockImg11,
      description: "Accommodation included"
    },
    {
      title: "District Level (Offline)",
      prize: "Consolation Prize: ₹10,00,000/-",
      icon: "🏛️",
      gradient: "from-green-500 to-blue-500",
      image: districtImg7,
      description: "All failure candidates get ₹10,00,000/-"
    }
  ];

  // Final Level Winners Data - All rewards visible on flip
  const finalWinners = [
    {
      rank: "1st Prize",
      amount: "15 Crores",
      icon: "👑",
      gradient: "from-yellow-500 to-amber-500",
      rewards: ["🏆 1 Kg Gold Trophy", "💰 10 Crore Cash", "🚗 Jaguar Car", "🏠 5 BHK Flat", "🎓 Scholarship For Abroad Study"]
    },
    {
      rank: "2nd Prize",
      amount: "12 Crores",
      icon: "🏆",
      gradient: "from-gray-400 to-gray-500",
      rewards: ["🏆 500 gm Gold Trophy", "💰 8 Crore Cash", "🚗 Jaguar Car", "🏠 5 BHK Flat", "🎓 Scholarship For Abroad Study"]
    },
    {
      rank: "3rd Prize",
      amount: "10 Crores",
      icon: "🏅",
      gradient: "from-amber-600 to-amber-700",
      rewards: ["🏆 250 gm Gold Trophy", "💰 6 Crore Cash", "🚗 Jaguar Car", "🏠 5 BHK Flat", "🎓 Scholarship For Abroad Study"]
    },
    {
      rank: "4th to 32nd Rankers",
      amount: "2 Crores",
      icon: "🎖️",
      gradient: "from-green-500 to-emerald-500",
      rewards: ["💰 1,00,00,000/- Cash", "🏠 4 BHK Flat", "🚙 Thar Car", "🥇 50 Gram Pure Gold Medal"]
    },
    {
      rank: "33th to 1932th Rankers",
      amount: "50 Lakh",
      icon: "⭐",
      gradient: "from-blue-500 to-indigo-500",
      rewards: ["💰 50,00,000/-", "🏠 3 BHK Flat", "🚗 Hyundai Exter Car", "🥇 20 Gram Pure Gold Medal"]
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4" style={{ background: "linear-gradient(176deg, rgb(92, 90, 255), rgb(79 69 239 / 59%))" }}>
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            🏆 Prize List 🏆
          </h1>
          <p className="text-white/80 text-lg">1932 Candidates Will Become Crorepaties</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        </div>
      </div>

      {/* First 3 Cards in 1 Row */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstThreeCards.map((card, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
              <div className="text-center">
                <div className="text-5xl mb-3">{card.icon}</div>
                <h2 className="text-xl font-bold text-white mb-3">{card.title}</h2>
                
                {card.winner && (
                  <div className="bg-white/20 rounded-xl p-3 mb-3">
                    <p className="text-yellow-200 font-semibold">🏆 {card.winner} 🏆</p>
                  </div>
                )}
                
                {card.prize && (
                  <div className="bg-white/20 rounded-xl p-3 mb-3">
                    <p className="text-white font-semibold">✨ {card.prize} ✨</p>
                    <p className="text-white/80 text-sm mt-1">{card.description}</p>
                  </div>
                )}
                
                {card.description && card.title.includes("School") && (
                  <p className="text-white/80 text-sm mb-3">{card.description}</p>
                )}
                
                <button 
                  onClick={() => openImageModal(card.image)}
                  className="mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm transition-all duration-300 w-full"
                >
                  View Prize 🎁
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Level Section - 5 Flip Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white inline-block bg-gradient-to-r from-red-500 to-pink-500 px-6 py-2 rounded-full">
            🏆 Grand Final Level (Offline)
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {finalWinners.map((winner, idx) => (
            <FlipWinnerCard key={idx} winner={winner} />
          ))}
        </div>

        {/* Final Level Images */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
          <div onClick={() => openImageModal(cupImage)} className="cursor-pointer group">
            <img 
              src={cupImage} 
              alt="Cup" 
              className="w-full h-40 object-contain rounded-xl hover:scale-105 transition-all duration-300 shadow-lg bg-white/10 p-2" 
            />
          </div>
          <div onClick={() => openImageModal(finalImg4)} className="cursor-pointer group">
            <img 
              src={finalImg4} 
              alt="Final" 
              className="w-full h-40 object-contain rounded-xl hover:scale-105 transition-all duration-300 shadow-lg bg-white/10 p-2" 
            />
          </div>
          <div onClick={() => openImageModal(ruppes)} className="cursor-pointer group">
            <img 
              src={ruppes} 
              alt="Rupees" 
              className="w-full h-40 object-contain rounded-xl hover:scale-105 transition-all duration-300 shadow-lg bg-white/10 p-2" 
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-3xl font-bold text-yellow-400">1932</div>
              <div className="text-white/70 text-sm">Winners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">15 Cr+</div>
              <div className="text-white/70 text-sm">Total Prize Pool</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">4</div>
              <div className="text-white/70 text-sm">Levels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">Nationwide</div>
              <div className="text-white/70 text-sm">Competition</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-black text-sm font-semibold">
          India's Biggest Scholarship Competition
        </p>
      </div>

      {/* Image Modal */}
      <Modal 
        open={modalVisible} 
        footer={null} 
        onCancel={() => setModalVisible(false)} 
        width="auto" 
        centered
        className="image-modal"
      >
        <img src={selectedImage} alt="Prize" className="w-full max-h-[80vh] object-contain rounded-lg" />
      </Modal>

      {/* Flip Card CSS Styles */}
      <style jsx>{`
        .flip-card-wrapper {
          background-color: transparent;
          height: 320px;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          border-radius: 1rem;
        }
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default AllPrizeExam;