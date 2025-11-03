import React from 'react'
import { Card } from 'antd'
import 'antd/dist/reset.css'

const scholarshipPoints = [
    {
        text: 'In the Scholarship National Cup you will win one label and one zero will increase in your account. No one has seen or heard such an interesting competition in the world. But only Padho India has been able to organize such an interesting competition.',
        highlight: 'Scholarship National Cup you will win one label and one zero will increase in your account',
    },
    {
        text: 'If your child is a student of class one to class twelve, then in order to maintain the equality of examination, to keep transparency, and to give equal rights to all students, a teacher or guardian must sit with the student at the examination table, and how many levels of online examination You will be able to use also google master in that exam.Even too offline must sit the exam with that associate.',
        highlight: ' one to class twelve, then in order to maintain the equality of examination, to keep transparency, and to give equal rights to all students, a teacher or guardian must sit with the student at the examination table,',
    },
    {
        text: 'Students from any state can appear in this Scholarship National Cup Competition while the state in which the exam will be conducted is for the state. Can take the Exam not once but more than once To participate in the final. There will be no restrictions on anyone here.',
        highlight: 'Can take the Exam not once but more than once To participate in the final.',
    },
    {
        text: 'In this competition there will be qualifying exam and two more levels 1) School / College Level and 2) Block Level online exam. If you can qualify these labels online, then all Two levels 1) District Level and 2) National Level will be offline, all the students who come to take the exam offline will be benefited. At least you will become a millionaire and a Crorepati will definitely be a multi-participant. Coming to take the exam offline means opening up his luck',
        highlight: 'all the students who come to take the exam offline will be benefited. At least you will become a millionaire and a Crorepati will definitely be a multi-participant.',
    },
    {
        text: 'In this Competition students or public any person can take the exam.If the public champion in this test, then he can use the scholarship for his/her children to study abroad, and if his/her Children does not reach the appropriate place, then he/she will not get this scholarship. This scholarship will then be used for others poor brilliant students.',
        highlight: 'If the public champion in this test, then he can use the scholarship for his/her children to study abroad, and if his/her Children does not reach the appropriate place, then he/she will not get this scholarship.',
    },
    {
        text: 'This competition is full level Based competition, Online Exam winners of each level must get prize within minutes. If there is no level test then no candidate can claim for the next test. That is why those who are winning in each label are being awarded attractively ... as ordered by the authority of KK Padho India Company.',
        highlight: 'Online Exam winners of each level must get prize within minutes. If there is no level test then no candidate can claim for the next test.',
    },
    {
        text: 'The exam will be conducted as long as the quota limit of this exam is available, if the exam percentage decreases due to any reason then all clear will be distributed according to that percentage, otherwise no commitment will be accepted.',
        highlight: 'if the exam percentage decreases due to any reason then all clear will be distributed according to that percentage, ',
    },
    {
        text: 'According to the government rules, all the prize money will be paid to the candidates after deducting the tax. In this case, the plea of ​​any candidate will not be accepted in any way.',
        highlight: 'all the prize money will be paid to the candidates after deducting the tax. ',
    },
    {
        text: 'Half of the prize money available to all National Level candidates for this examination will be given to orphans Sick Children and destitute Children Those who will be used for education and food. In this case, all the recipients of the money can also search the details of the donors from our website https://www.kkpadhoindia.com/',
        highlight: 'National Level candidates for this examination will be given to orphans Sick Children and destitute Children Those who will be used for education and food.',
    },
    {
        text: 'The entry fee that is being taken in this competition is not for any betting or gambling, this little money is being taken for the traveling, lodging, fooding, online maintenance expenses of the students. No student can make any claim for payment of this amount, no person or guardian can make any kind of claim and if they do it will be completely ignored. No one can take legal aid in any form, every student is willing, healthy and able to pay this money. All students are committed to this. And whoever ( KK PADHO INDIA) is accepting this money in India is completely legal.',
        highlight: 'this little money is being taken for the traveling, lodging, fooding, online maintenance expenses of the students. No student can make any claim for payment of this amount, no person or guardian can make any kind of claim and if they do it will be completely ignored.',
    },
     
]

const ScholarshipHighlights = () => {
    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
             KK Padho India Scholarship National Cup Rules And System
             </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 italic mb-6">
                Empowering dreams through <span className="font-semibold text-green-600">education</span>, <span className="font-semibold text-green-600">support</span>, and <span className="font-semibold text-green-600">opportunity</span>.
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
                                        <span className="text-green-500 font-bold not-italic">{item.highlight}</span>
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
