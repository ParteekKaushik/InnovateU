import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section id="about" className=" text-white py-12 px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Section Title */}
        <h1
          className="text-3xl lg:text-5xl text-indigo-600 font-bold mb-16 text-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          About InnovateU
        </h1>

        {/* Card Container with Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div
            className="relative bg-cover bg-center p-6 rounded-lg shadow-lg h-[400px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80')", // Background image for welcome card
              opacity: 0.6, // Lower opacity for better text contrast
            }}
            data-aos="fade-up"
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold mb-4">
                Welcome to InnovateU
              </h2>
              <p className="text-xl">
                InnovateU is dedicated to equipping school students with the
                cutting-edge skills they need to excel in the tech industry and
                beyond.
                <span className="md:block hidden">
                  Our comprehensive training programs cover web development,
                  mobile development, and essential personality development
                  skills to give students a competitive edge in their future
                  careers.
                </span>
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div
            className="relative bg-cover bg-center p-6 rounded-lg shadow-lg h-[400px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80')", // Mission background
              opacity: 0.8, // Lower opacity for better text contrast
            }}
            data-aos="fade-up"
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
              <p className="text-xl">
                Our mission is to empower students with the knowledge and skills
                needed to excel in the ever-evolving tech landscape. We believe
                in fostering creativity, technical expertise, and personal
                growth to prepare students for success.
              </p>
            </div>
          </div>

          {/* Our Approach Card */}
          <div
            className="relative bg-cover bg-center p-6 rounded-lg shadow-lg h-[400px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1629362050323-b40efaa4c217?q=80')", // Approach background
              opacity: 0.8, // Lower opacity for better text contrast
            }}
            data-aos="fade-up"
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold mb-4">Our Approach</h2>
              <p className="text-xl">
                We combine practical, hands-on training with expert mentorship
                to deliver an engaging and effective learning experience. Our
                courses are designed to be interactive and relevant to current
                industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
