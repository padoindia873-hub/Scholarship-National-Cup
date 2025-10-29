import React from 'react'
import { Card } from 'antd'

const educationSections = [
  {
    title: 'Higher Education Scholarship',
    points: ['Registration Form', 'About All Degrees'],
    mode: 'Online Info',
  },
  // {
  //   title: 'Live Streaming',
  //   points: ['Previous Records', 'Upcoming Sessions'],
  //   mode: 'Online Broadcast',
  // },
  // {
  //   title: 'Top Schools Record',
  //   points: [
  //     'Up to 100 Schools',
  //     'School Name',
  //     'Picture',
  //     'State, Category & Details',
  //   ],
  //   mode: 'Showcase',
  // },
  // {
  //   title: 'Top Students Record',
  //   points: ['District-wise Records', 'State-wise Records'],
  //   mode: 'Showcase',
  // },
]

const EducationOverview = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2 capitalize leading-snug">
        Education Portal Overview
      </h2>

      <p className="text-center text-sm sm:text-base text-gray-600 mb-10 italic max-w-xl">
        <span className="font-semibold text-blue-600">Scholarships</span>,{' '}
        <span className="font-semibold text-blue-600">Records</span>, and{' '}
        <span className="font-semibold text-blue-600">Live Streaming</span> — All in one place for student empowerment.
      </p>

      <div className="w-full max-w-2xl grid gap-8">
        {educationSections.map((section, index) => (
          <Card
            key={index}
            bordered={false}
            className="bg-transparent"
            bodyStyle={{ padding: 0 }}
          >
            <div className="text-center mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {section.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 mt-1">{section.mode}</p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              {section.points.map((point, i) => (
                <div
                  key={i}
                  className="w-full text-center px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-200 text-base sm:text-lg"
                >
                  {point}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default EducationOverview
