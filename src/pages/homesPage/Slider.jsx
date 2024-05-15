// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="my-6">
      <Swiper
        cssMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/property/2">
            <div className="relative ">
              <div
                className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/mvcrJGs/pexels-binyamin-mellish-1396132.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "80vh",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                {/* content */}
                <div className="absolute text-center space-y-4 text-white z-10 ">
                  <h1 className="text-sm uppercase">Single-family home</h1>
                  <p className="text-5xl mb-6">Suburban Family Home</p>
                  <button className="btn ">View Property</button>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <Link to="/property/1">
            <div className="relative">
              <div
                className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/wyhtdjr/pexels-curtis-adams-4119831.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "80vh",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                {/* content */}
                <div className="absolute space-y-4 text-center text-white z-10">
                  <h1 className="text-sm uppercase">apartment</h1>
                  <p className="text-5xl mb-6">Downtown Apartment</p>
                  <button className="btn ">View Property</button>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <Link to="/property/5">
            <div className="relative">
              <div
                className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/r6z55Xv/pexels-mark-2724749.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "80vh",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                {/* content */}
                <div className="absolute space-y-4 text-center text-white z-10">
                  <h1 className="text-sm uppercase">Senior living community</h1>
                  <p className="text-5xl mb-6">Retirement Community</p>
                  <button className="btn">View Property</button>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
      {/* ******************************** */}
      {/* 1 */}
      {/* <div className="relative">
        <div
          className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/mvcrJGs/pexels-binyamin-mellish-1396132.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "80vh",
            backgroundRepeat: "no-repeat",
          }}
        >
        
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
         
          <div className="absolute text-center text-white z-10">
            <h1>HEADING</h1>
            <p>subheading</p>
            <button className="btn">View Property</button>
          </div>
        </div>
      </div> */}
      {/*  */}
    </div>
  );
};

export default Slider;
