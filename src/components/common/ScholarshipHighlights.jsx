import React from 'react'
import { Card } from 'antd'
import 'antd/dist/reset.css'

const scholarshipPoints = [
    {
        text: 'We proudly proclaim that 10 to 15 thousand boys and girls will build the future of girls every year by various higher education diplomas.',
        highlight: '10 to 15 thousand boys and girls',
    },
    {
        text: 'Billions of poor boys and girls who cannot read tuition will give them free tuition two times by online.',
        highlight: 'free tuition two times',
    },
    {
        text: 'Every year thousands of children will give the opportunity To get a job.',
        highlight: 'opportunity To get a job',
    },
    {
        text: 'Share all the cost of 1000 Journalism Candidates to MKK ONLINE ALLIANCE.',
        highlight: '1000 Journalism Candidates',
    },
    {
        text: 'Share all the cost of 2000 B.Ed, Candidates and 2000 D.El.Ed Candidates to MKK ONLINE ALLIANCE.',
        highlight: '2000 B.Ed, Candidates and 2000 D.El.Ed Candidates',
    },
    {
        text: 'Share all the cost of 1000 Poor Excellent and Brilliant NEET Pass Out Government Medical College Candidates to MKK ONLINE ALLIANCE.',
        highlight: '1000 Poor Excellent and Brilliant NEET Pass Out',
    },
    {
        text: 'Share all the cost of 2000 BSC And GNM Nursing Candidates to MKK ONLINE ALLIANCE.',
        highlight: '2000 BSC And GNM Nursing Candidates',
    },
    {
        text: 'Share all the cost of 2000 Acting Diploma Candidates to MKK ONLINE ALLIANCE.',
        highlight: '2000 Acting Diploma Candidates',
    },
    {
        text: 'Share All the cost of All the IAS and IPS Candidates in Bengal to MKK ONLINE ALLIANCE.',
        highlight: 'IAS and IPS Candidates',
    },
    {
        text: 'Share all the cost of 5000 Various Engineering Diploma Candidates in Bengal to MKK ONLINE ALLIANCE.',
        highlight: '5000 Various Engineering Diploma Candidates',
    },
     {
        text: 'We proudly proclaim that 10 to 15 thousand boys and girls will build the future of girls every year by various higher education diplomas.',
        highlight: '10 to 15 thousand boys and girls',
    },
    {
        text: 'Billions of poor boys and girls who cannot read tuition will give them free tuition two times by online.',
        highlight: 'free tuition two times',
    },
    {
        text: 'Every year thousands of children will give the opportunity To get a job.',
        highlight: 'opportunity To get a job',
    },
    {
        text: 'Share all the cost of 1000 Journalism Candidates to MKK ONLINE ALLIANCE.',
        highlight: '1000 Journalism Candidates',
    },
    {
        text: 'Share all the cost of 2000 B.Ed, Candidates and 2000 D.El.Ed Candidates to MKK ONLINE ALLIANCE.',
        highlight: '2000 B.Ed, Candidates and 2000 D.El.Ed Candidates',
    },
    {
        text: 'Share all the cost of 1000 Poor Excellent and Brilliant NEET Pass Out Government Medical College Candidates to MKK ONLINE ALLIANCE.',
        highlight: '1000 Poor Excellent and Brilliant NEET Pass Out',
    },
    {
        text: 'Share all the cost of 2000 BSC And GNM Nursing Candidates to MKK ONLINE ALLIANCE.',
        highlight: '2000 BSC And GNM Nursing Candidates',
    },
    {
        text: 'Share all the cost of 2000 Acting Diploma Candidates to MKK ONLINE ALLIANCE.',
        highlight: '2000 Acting Diploma Candidates',
    },
    {
        text: 'Share All the cost of All the IAS and IPS Candidates in Bengal to MKK ONLINE ALLIANCE.',
        highlight: 'IAS and IPS Candidates',
    },
    {
        text: 'Share all the cost of 5000 Various Engineering Diploma Candidates in Bengal to MKK ONLINE ALLIANCE.',
        highlight: '5000 Various Engineering Diploma Candidates',
    },
     {
        text: 'Share all the cost of 2000 BSC And GNM Nursing Candidates to MKK ONLINE ALLIANCE.',
        highlight: '2000 BSC And GNM Nursing Candidates',
    },
    {
        text: 'Share all the cost of 2000 Acting Diploma Candidates to MKK ONLINE ALLIANCE.',
        highlight: '2000 Acting Diploma Candidates',
    },
    {
        text: 'Share All the cost of All the IAS and IPS Candidates in Bengal to MKK ONLINE ALLIANCE.',
        highlight: 'IAS and IPS Candidates',
    },
    {
        text: 'Share all the cost of 5000 Various Engineering Diploma Candidates in Bengal to MKK ONLINE ALLIANCE.',
        highlight: '5000 Various Engineering Diploma Candidates',
    },
]

const ScholarshipHighlights = () => {
    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
                Scholarship & Education Empowerment Highlights
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 italic mb-6">
                Empowering dreams through <span className="font-semibold text-yellow-600">education</span>, <span className="font-semibold text-yellow-600">support</span>, and <span className="font-semibold text-yellow-600">opportunity</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scholarshipPoints.map((item, index) => (
                    <Card
                        key={index}
                        bordered={false}
                        className="border-[1px] border-blue-500 bg-white rounded-xl"
                        bodyStyle={{ padding: '16px' }}
                    >
                        <p className="text-gray-700 text-base md:text-lg italic font-medium leading-relaxed">
                            {item.text.split(item.highlight).map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span className="text-yellow-500 font-bold not-italic">{item.highlight}</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ScholarshipHighlights
