import React from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaClock } from "react-icons/fa";

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Message sent successfully!");
  };

  return (
    <div 
      className="min-h-screen py-6 px-4 md:px-6 lg:px-10"
      style={{ background: "linear-gradient(176deg, rgb(131 90 255), rgb(69 145 239 / 59%))" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Page Title - Reduced Padding */}
        <div className="text-center mb-6">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">
              Contact Us
            </h1>
            <p className="text-white/80 text-sm">We'd love to hear from you</p>
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Side - Contact Form - Compact */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-xl border border-white/20">
            <div className="text-center mb-4">
              <div className="text-3xl mb-1">📝</div>
              <h2 className="text-xl font-bold text-white">Send a Message</h2>
              <p className="text-white/70 text-xs">Fill out the form below</p>
            </div>

            <Form layout="vertical" onFinish={onFinish} className="space-y-2">
              <Form.Item
                label={<span className="text-white text-sm font-medium">Name</span>}
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
                className="mb-2"
              >
                <Input 
                  placeholder="John Doe" 
                  size="middle" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-yellow-400 text-sm"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-white text-sm font-medium">Email</span>}
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Invalid email format" }
                ]}
                className="mb-2"
              >
                <Input 
                  placeholder="example@mail.com" 
                  size="middle" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-yellow-400 text-sm"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-white text-sm font-medium">Phone</span>}
                name="phone"
                rules={[{ required: true, message: "Please enter your phone number" }]}
                className="mb-2"
              >
                <Input 
                  placeholder="+91 12345 67890" 
                  size="middle" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-yellow-400 text-sm"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-white text-sm font-medium">Subject</span>}
                name="subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
                className="mb-2"
              >
                <Input 
                  placeholder="Inquiry about services" 
                  size="middle" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-yellow-400 text-sm"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-white text-sm font-medium">Message</span>}
                name="message"
                rules={[{ required: true, message: "Please enter your message" }]}
                className="mb-3"
              >
                <Input.TextArea 
                  rows={3} 
                  placeholder="Write your message..." 
                  className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-yellow-400 text-sm"
                />
              </Form.Item>

              <Button 
                type="primary" 
                htmlType="submit" 
                size="middle" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-sm py-2 h-auto"
              >
                Send Message 📧
              </Button>
            </Form>
          </div>

          {/* Right Side - Contact Info & Map - Compact */}
          <div className="space-y-5">

            {/* Contact Details - Compact */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-xl border border-white/20">
              <div className="text-center mb-4">
                <div className="text-3xl mb-1">📍</div>
                <h2 className="text-xl font-bold text-white">Contact Information</h2>
                <p className="text-white/70 text-xs">Reach us through these channels</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <FaPhone className="text-green-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Phone</p>
                    <p className="text-white text-sm font-medium">+91 91237 44290</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-red-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Email</p>
                    <p className="text-white text-sm font-medium">padoindia873@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Address</p>
                    <p className="text-white text-sm font-medium">Kolkata, West Bengal, 700135</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <FaClock className="text-yellow-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Working Hours</p>
                    <p className="text-white text-sm font-medium">Mon - Sat: 10 AM - 6 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons - Compact */}
              <div className="mt-4 pt-3 border-t border-white/20">
                <p className="text-white/70 text-xs text-center mb-2">Follow us</p>
                <div className="flex justify-center space-x-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-all duration-300">
                    <FaFacebook className="text-blue-400 text-sm" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-sky-500/20 rounded-full flex items-center justify-center hover:bg-sky-500/40 transition-all duration-300">
                    <FaTwitter className="text-sky-400 text-sm" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center hover:bg-pink-500/40 transition-all duration-300">
                    <FaInstagram className="text-pink-400 text-sm" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-700/20 rounded-full flex items-center justify-center hover:bg-blue-700/40 transition-all duration-300">
                    <FaLinkedin className="text-blue-400 text-sm" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section - Compact Height */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/20">
              <div className="p-2">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.106085484624!2d88.3495743149608!3d22.57288128519155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b8e5f6e8a9%3A0x5e6c5c8c5e6c5c8c!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Compact */}
        <div className="text-center mt-6">
          <p className="text-black/60 text-xs">
            India's Biggest Scholarship Competition
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;