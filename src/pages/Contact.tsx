import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
      .then(
        (result) => {
          console.log('Message sent: ', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error sending message: ', error.text);
          alert('Error sending message, please try again later.');
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-lg p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-white focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-white focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-white focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-white focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
