// import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className=" py-12 h-[100vh]">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          {/* Left Section: Contact Info */}
          <div className="lg:w-2/6 text-left space-y-6 ">
            <h6 className=" text-sm font-semibold">
              Contact Us
            </h6>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Feel Free To Contact Us Anytime
            </h2>
            <p className="text-2xl">
              Don't like filling up forms? Email us directly at -
            </p>
            <span className="text-indigo-600 text-3xl mt-8">hi@innovateu.com</span>
            
          </div>

          {/* Right Section: Contact Form */}
          <div className="lg:w-2/6 mt-10 lg:mt-0 px-8 py-14 md:p-20 rounded-3xl relative bg-gray-900">
            <form id="contact-form" action="#" method="post">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-2 text-black placeholder:text-lg placeholder-gray-800 rounded-lg"
                    placeholder="Your Name..."
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 text-black placeholder:text-lg placeholder-gray-800 rounded-lg"
                    placeholder="Your E-mail..."
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full px-4 py-2 text-black placeholder:text-lg placeholder-gray-800 rounded-lg"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    id="form-submit"
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
