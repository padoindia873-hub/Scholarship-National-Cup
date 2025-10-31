import React from 'react'
import { Card, Image } from 'antd'

// Import 20 images
import img1 from '../../assets/gellary/img1.jpg'
import img2 from '../../assets/gellary/img2.jpg'
import img3 from '../../assets/gellary/img3.jpg'
import img4 from '../../assets/gellary/img4.jpg'
import img5 from '../../assets/gellary/img5.jpg'
import img6 from '../../assets/gellary/img6.jpg'
import img7 from '../../assets/gellary/img7.jpg'
import img8 from '../../assets/gellary/img8.jpg'
import img9 from '../../assets/gellary/img9.jpg'
import img10 from '../../assets/gellary/img10.jpg'
import img11 from '../../assets/gellary/img11.jpg'
import img12 from '../../assets/gellary/img12.jpg'
import img13 from '../../assets/gellary/img13.jpg'
import img14 from '../../assets/gellary/img14.jpg'
import img15 from '../../assets/gellary/img15.jpg'
import img16 from '../../assets/gellary/img16.jpg'
import img17 from '../../assets/gellary/img17.jpg'
import img18 from '../../assets/gellary/img18.jpg'
import img19 from '../../assets/gellary/img19.jpg'
import img20 from '../../assets/gellary/img20.jpg'

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
]

const Gallery = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
        Padho Hindustan Exam Preparation Gallery
      </h2>

      <p className="text-center text-gray-600 italic font-medium mb-8">
        Empowering dreams through education, support, and opportunity.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <Card
            key={index}
            bodyStyle={{ padding: 0 }}
            className="shadow-md border border-gray-200 rounded-xl overflow-hidden"
            cover={
              <div className="w-full h-[150px] overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  preview={true}
                  className="w-full h-full object-cover !mb-0"
                />
              </div>
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
