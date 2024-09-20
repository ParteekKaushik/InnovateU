import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const CoreOfferings = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const offerings = [
    {
      title: "Web Development",
      description:
        "Our web development program equips students with the skills to build and maintain websites, fostering creativity and technical proficiency.",
      image:
        "https://10web-site.ai/126/wp-content/uploads/sites/138/2024/09/tenweb_media_0b1m70md.webp", // Image path in the public folder
    },
    {
      title: "Mobile Development",
      description:
        "Our mobile development program teaches students how to create mobile applications, enhancing their technical skills.",
      image:
        "https://10web-site.ai/126/wp-content/uploads/sites/138/2024/09/tenweb_media_ax732Iha.webp",
    },
    {
      title: "Personality Development",
      description:
        "Our personality development program focuses on building strong interpersonal skills, confidence, and leadership qualities in students.",
      image:
        "https://10web-site.ai/126/wp-content/uploads/sites/138/2024/09/tenweb_media_SgdW8URT.webp",
    },
  ];
  return (
    <div id="courses" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center pb-8 justify-evenly px-4 md:px-0">
          <h2
            className="text-3xl md:text-6xl font-bold text-center mb-8 md:mb-16 p-2 md:p-4"
          >
            {/* Text shown on larger screens */}
            <span className="hidden md:block text-5xl text-indigo-600 font-bold">
              Our Core Offerings
            </span>
            {/* Text shown on smaller screens */}
            <span className="md:hidden text-5xl text-indigo-600 font-medium">
              Courses
            </span>
          </h2>
          <p className="w-full md:w-[35%] text-center md:text-left text-base md:text-lg">
            Explore our range of programs designed to equip students with
            essential skills for the digital age. From web and mobile
            development to personality development, our courses are tailored to
            foster both technical expertise and personal growth.
          </p>
        </div>

        <div className="flex flex-col shadow-xl md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black transform transition-all duration-500 ease-in-out hover:scale-105 relative"
              data-aos="fade-up"
            >
              <img
                className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                src={offering.image}
                alt={offering.title}
              />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{offering.title}</h3>
                <p className="text-gray-300 text-base">
                  {offering.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-6">
                <button className="text-blue-500 hover:underline">
                  Join & Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreOfferings;
