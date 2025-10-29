import React from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Message sent successfully!");
  };

  return (
    <div className="bg-white min-h-screen py-6 px-4 md:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-6">
          <Title level={3} className="text-2xl font-semibold text-gray-800">
            Contact Us
          </Title>
          <Paragraph className="text-sm text-gray-600 mt-1">
            We'd love to hear from you. Send us a message or reach us through our contact details.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-md p-4 h-full flex flex-col justify-between">
            <Title level={4} className="text-lg font-medium text-gray-700 mb-3">
              Send a Message
            </Title>

            <Form layout="vertical" onFinish={onFinish} className="space-y-3">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
                className="mb-2"
              >
                <Input placeholder="John Doe" size="large" className="w-full bg-white focus:bg-white rounded-md" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Invalid email format" }
                ]}
                className="mb-2"
              >
                <Input placeholder="example@mail.com" size="large" className="w-full bg-white focus:bg-white rounded-md" />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Please enter your phone number" }]}
                className="mb-2"
              >
                <Input placeholder="+1 234 567 890" size="large" className="w-full bg-white focus:bg-white rounded-md" />
              </Form.Item>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
                className="mb-2"
              >
                <Input placeholder="Inquiry about services" size="large" className="w-full bg-white focus:bg-white rounded-md" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please enter your message" }]}
                className="mb-3"
              >
                <Input.TextArea rows={4} placeholder="Write your message..." className="w-full bg-white focus:bg-white rounded-md" />
              </Form.Item>

              <div className="text-center">
                <Button type="primary" htmlType="submit" size="large" className="bg-blue-600 hover:bg-blue-500 transition w-full">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>

          {/* Right Side - Contact Info & Map */}
          <div className="flex flex-col justify-between h-full">

            {/* Contact Details */}
            <div className="bg-white rounded-md p-4 mb-4">
              <Title level={4} className="text-lg font-medium text-gray-700 mb-3">
                Contact Information
              </Title>

              <div className="space-y-2">
                <div className="flex items-center">
                  <FaPhone className="text-green-500 text-lg mr-2" />
                  <Paragraph className="text-sm text-gray-700">+91 91237 44290</Paragraph>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="text-red-500 text-lg mr-2" />
                  <Paragraph className="text-sm text-gray-700">padoindia873@gmail.com</Paragraph>
                </div>

                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 text-lg mr-2" />
                  <Paragraph className="text-sm text-gray-700">Kolkata, West Bengal, India, 700135</Paragraph>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-start space-x-3 mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                  <FaFacebook className="text-lg" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-700 transition">
                  <FaTwitter className="text-lg" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition">
                  <FaInstagram className="text-lg" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-md overflow-hidden h-full">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509931!2d144.95592331550415!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xbba5a3a881e10c0!2sFederation+Square!5e0!3m2!1sen!2sus!4v1633643384829!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
