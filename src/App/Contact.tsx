import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Basic email pattern for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form validation function
  const validateForm = () => {
    const errors: { name: string; email: string; message: string } = {
      name: '',
      email: '',
      message: ''
    };

    let isValid = true;

    if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters long.';
      isValid = false;
    }

    if (!emailPattern.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Type the event for input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Type the form submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before sending
    if (!validateForm()) {
      alert('Please fix the errors in the form.');
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        'service_8z797gf', // Replace with your EmailJS service ID
        'template_1hweq29', // Replace with your EmailJS template ID
        formData,
        'XgTFCU61m-rkxTkDC' // Replace with your EmailJS user ID
      )
      .then((result: EmailJSResponseStatus) => {
        console.log(result);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Currently we are facing some issue please drop a mail, Sorry for inconvience');
      });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="py-12 h-[100vh]">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <div className="lg:w-2/6 text-left space-y-6">
            <h6 className="text-sm font-semibold">Contact Us</h6>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Feel Free To Contact Us Anytime
            </h2>
            <p className="text-2xl">Don't like filling up forms? Email us directly at -</p>
            <span className="text-indigo-600 text-3xl mt-8">kaushikparteekofficial@gmail.com</span>
          </div>

          <div className="lg:w-2/6 mt-10 lg:mt-0 px-8 py-14 md:p-20 rounded-3xl relative bg-gray-900">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-black placeholder:text-lg placeholder-gray-800 rounded-lg"
                    placeholder="Your Name..."
                    required
                  />
                  {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-black placeholder:text-lg placeholder-gray-800 rounded-lg"
                    placeholder="Your E-mail..."
                    required
                  />
                  {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-black placeholder:text-lg placeholder-gray-800 rounded-lg"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full text-white font-semibold border py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Send Message Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
