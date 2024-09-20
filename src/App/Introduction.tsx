import WordRotate from "../../@/components/magicui/Word-rotate";
import CEO_IMG from "../assets/ceo.jpeg"

const Introduction = () => {
  return (
    <section id="mission" className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt=""
          src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-3xl font-semibold leading-8 sm:text-2xl sm:leading-9">
            <p className="text-3xl">
              We empower school students with{" "}
              <span className="hidden md:block">
                cutting-edge tech skills like
              </span>
              <WordRotate
                className="text-5xl font-bold text-indigo-600 m-2"
                words={[
                  "Web Development",
                  "Mobile Development",
                  "Personal Development",
                ]}
              />
              <span className="hidden md:block">paving the way</span>
              for exceptional growth, ensuring career excellence.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src={CEO_IMG}
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold">Parteek Kaushik</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of InnovateU</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Introduction;
