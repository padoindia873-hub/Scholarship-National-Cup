import React from "react";
import { useParams } from "react-router-dom";
import { Card, Collapse, List } from "antd";
import "antd/dist/reset.css";

import schoolImg11 from "../../assets/school11.png";
import blockImg11 from "../../assets/block11.png";
import districtImg7 from "../../assets/district7.png";
import cupImage from "../../assets/cups.png";
import finalImg4 from "../../assets/final4.jpg";
import ruppes from "../../assets/wp4.jpg";

const { Panel } = Collapse;

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
    ],
    images: [cupImage, finalImg4, ruppes],
  },
];

export default function PrizeListsDetails() {
  const { id } = useParams();

  // id অনুযায়ী data select
  const selectedData =
    id && prizeData[parseInt(id) - 1]
      ? [prizeData[parseInt(id) - 1]]
      : [];

  return (
    <div className="p-5 md:p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Level Wise Prize Details
      </h2>

      {selectedData.length === 0 ? (
        <div className="text-center text-red-500 text-lg font-semibold">
          Invalid Level ID
        </div>
      ) : (
        <Collapse defaultActiveKey={["0"]} className="bg-gray-50 p-5">
          {selectedData.map((section, index) => (
            <Panel
              key={index}
              header={
                <span className="text-black font-semibold text-lg">
                  {section.level}
                </span>
              }
            >
              {section.winner && (
                <p className="text-base font-semibold text-yellow-700 mb-2">
                  {section.winner}
                </p>
              )}

              {section.images && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
                  {section.images.map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={`prize-img-${i}`}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  ))}
                </div>
              )}

              {section.prizes && (
                <List
                  dataSource={section.prizes}
                  renderItem={(item) => (
                    <List.Item className="font-medium">
                      {item}
                    </List.Item>
                  )}
                  bordered
                  className="mb-4"
                />
              )}

              {section.winners && (
                <>
                  <h4 className="text-lg font-semibold mt-4 text-yellow-800">
                    {section.TopWinners}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {section.winners.map((winner, idx) => (
                      <Card
                        key={idx}
                        title={
                          <span className="font-bold text-base">
                            {winner.title}
                          </span>
                        }
                        className="bg-blue-50 border border-blue-600"
                        bordered={false}
                      >
                        <List
                          dataSource={winner.rewards}
                          renderItem={(item) => (
                            <List.Item className="font-medium">
                              {item}
                            </List.Item>
                          )}
                        />
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
}