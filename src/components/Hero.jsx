import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const headingStyle = { fontFamily: "Playfair Display, serif" };
const bodyStyle = { fontFamily: "Inter, sans-serif" };

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1500 }}
      loop={true}
      className="h-[100dvh]"
    >
      <SwiperSlide>
        <div
          className="h-[95dvh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: "url('/images/steel.jpg')" }}
        >
         <div
  className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-center text-white px-6 translate-y-[-10%] md:translate-y-[-5%]"
  style={bodyStyle}
>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={headingStyle}
            >
              Engineering Strength in Every Alloy
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-gray-200 tracking-wide">
              Strength You Can Trust, Steel That Lasts
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="h-[95dvh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: "url('/images/steel1.jpg')" }}
        >
         <div
  className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-center text-white px-6 translate-y-[-10%] md:translate-y-[-5%]"
  style={bodyStyle}
>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={headingStyle}
            >
              Precision Alloy Solutions
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-gray-200 tracking-wide">
              Forging Quality, Building the Future
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[95dvh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: "url('/images/steel3.jpg')" }}
        >
         <div
  className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-center text-white px-6 translate-y-[-10%] md:translate-y-[-5%]"
  style={bodyStyle}
>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={headingStyle}
            >
              Global Steel Supply Network
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-gray-200 tracking-wide">
              Delivering Strength Across the World
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="h-[95dvh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: "url('/images/hott.jpeg')" }}
        >
         <div
  className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-center text-white px-6 translate-y-[-10%] md:translate-y-[-5%]"
  style={bodyStyle}
>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={headingStyle}
            >
              Innovation in Steel Manufacturing
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-gray-200 tracking-wide">
              Shaping the Future with Strong Foundations
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="h-[95dvh] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
          style={{ backgroundImage: "url('/images/hot.jpeg')" }}
        >
         <div
  className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-center text-white px-6 translate-y-[-10%] md:translate-y-[-5%]"
  style={bodyStyle}
>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={headingStyle}
            >
              Steel Factory Hot Rod
            </h1>

            <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-gray-200 tracking-wide">
              Hot steel rods made in factory
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;