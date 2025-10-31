import React from 'react'
import { Card } from 'antd'

const syllabusData = [
  {
    level: '1st Level (School College Level)',
    mode: 'Online Based',
    subjects: [
      'National Flag',
      'National Bird',
      'National Animal',
      'National Anthem',
      'Government Projects For Public',
      'Phrasal Verbs',
      'Human Body',
    ],
  },
  {
    level: '2nd Level (Block Level)',
    mode: 'Online Based',
    subjects: [
      'Flower',
      'Vegetable',
      'Fish',
      "Math's",
      'Synonym',
      'Words',
      'First Women India',
      'First India',
      'First Bengal',
    ],
  },
  {
    level: '3rd Level (District Level)',
    mode: 'Online Based',
    subjects: [
      'All Prime Minister',
      'All Chief Minister (Bengal)',
      'Full Form',
      'World First Man & Woman',
      'National Agencies and Training',
      'Pseudonym and Character',
      'Name of Indian Various State Dance',
      'Capital, Currency and Parliament',
      'Awards And Famous Person',
      'Name of World Famous News Agencies',
      'Game Innovated Country',
    ],
  },
  {
    level: '4th Level (State Level)',
    mode: 'Offline Competition',
    subjects: ['About All Subjects'],
  },
]

const Syllabus = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2 capitalize leading-snug">
        Padho Hindustan National Cup Competition Subjects
      </h2>

      <p className="text-center text-sm sm:text-base text-gray-600 mb-10 italic">
        <span className="font-semibold text-yellow-600">From School</span> to <span className="font-semibold text-yellow-600">State Level</span> – Unlock Knowledge at Every Step
      </p>


      <div className="grid gap-6">
        {syllabusData.map((section, index) => (
          <Card
            key={index}
            bordered={false}
            className="rounded-xl bg-white border border-blue-400"
            title={
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-bold text-gray-800 text-base sm:text-lg">
                  {section.level}
                </span>
                <span className="text-sm font-semibold text-blue-500">{section.mode}</span>
              </div>
            }
          >
            <div className="flex flex-wrap gap-3 mt-4">
              {section.subjects.map((subject, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200 text-sm sm:text-base"
                >
                  {subject}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Syllabus
