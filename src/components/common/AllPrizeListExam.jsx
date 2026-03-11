import React from "react";
import { Card, List } from "antd";
import "antd/dist/reset.css";

import schoolImg11 from "../../assets/school11.png";
import blockImg11 from "../../assets/block11.png";
import districtImg7 from "../../assets/district7.png";
import cupImage from "../../assets/cups.png";
import finalImg4 from "../../assets/final4.jpg";
import ruppes from "../../assets/wp4.jpg";

const prizeData = [
  {
    level: "School and College Level (Online)",
    winner: "1st Winner will get Rs. 10000",
    images: [schoolImg11],
  },
  {
    level: "Block Level (Online)",
    prizes: [
      "1st, 2nd and 3rd Winners: Rs. 2,00,000/- Accommodation (traveling lodging and fooding) for offline exam",
    ],
    images: [blockImg11],
  },
  {
    level: "District Level (Offline)",
    prizes: [
      "Consolation Prize > 10,00,000/- + All failure candidates will get 10,00,000/-",
    ],
    images: [districtImg7],
  },
  {
    level: "Final Level (National Level) (Offline)",
    TopWinners: "Top Winners",
    winners: [
      {
        title: "1st Prize ---- 15 Crores",
        rewards: [
          "1 Kg Gold Trophy",
          "10 Crore Cash",
          "Jaguar Car",
          "5 BHK Flat",
          "Scholarship For Abroad Study",
        ],
      },
      {
        title: "2nd Prize ---- 12 Crores",
        rewards: [
          "500 gm Gold Trophy",
          "8 Crore Cash",
          "Jaguar Car",
          "5 BHK Flat",
          "Scholarship For Abroad Study",
        ],
      },
      {
        title: "3rd Prize ---- 10 Crores",
        rewards: [
          "250 gm Gold Trophy",
          "6 Crore Cash",
          "Jaguar Car",
          "5 BHK Flat",
          "Scholarship For Abroad Study",
        ],
      },
        {
  title: (
    <>
      4th to 32nd Rankers <br />
      Will Get ---- 2 Crores
    </>
  ),
  rewards: [
    '1,00,00,000/- Cash',
    '4 BHK Flat',
    'Thar Car',
    '50 Gram Pure Gold Medal',
  ],
},
      {
        title: '33th to 1932th Rankers Will Get',
        rewards: [
          
          '1,00,00,000/-',
          '3 BHK Flat',
          'Hyundai Exter Car ',
          '20 Gram Pure Gold Medal',          
        ],
      },
    ],
    images: [cupImage],
  },
];

const AllprizeListExam = () => {
  return (
    <div className="p-5 md:p-8 bg-gray-50 space-y-10">

      {prizeData.map((section, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow">

          {/* Level Title */}
          <h2 className="text-xl md:text-2xl font-bold text-yellow-700 mb-4">
            {section.level}
          </h2>

          {/* Winner */}
          {section.winner && (
            <p className="text-lg font-semibold text-gray-700 mb-4">
              {section.winner}
            </p>
          )}

          {/* Images */}
          {section.images && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
              {section.images.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt="prize"
                  className="w-full rounded-lg"
                />
              ))}
            </div>
          )}

          {/* Prize List */}
          {section.prizes && (
            <List
              dataSource={section.prizes}
              bordered
              renderItem={(item) => (
                <List.Item className="font-medium">{item}</List.Item>
              )}
            />
          )}

          {/* Winners */}
          {section.winners && (
            <>
              <h3 className="text-lg font-semibold text-blue-700 mt-6 mb-4">
                {section.TopWinners}
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {section.winners.map((winner, idx) => (
                  <Card key={idx} title={winner.title}>
                    <List
                      dataSource={winner.rewards}
                      renderItem={(item) => (
                        <List.Item>{item}</List.Item>
                      )}
                    />
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      ))}

    </div>
  );
};

export default AllprizeListExam ;