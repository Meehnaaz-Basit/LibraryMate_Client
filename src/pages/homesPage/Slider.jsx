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
import Button from "../../components/sharedItems/Button";

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
          <div className="relative ">
            <div
              className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/dbGxMF3/crop-hands-using-tablet-library.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-teal-900 opacity-60"></div>
              {/* content */}
              <div className="absolute text-center space-y-6 text-white z-10 font-merriweather">
                <h1 className="text-5xl mb-6">Unlock the Power of Knowledge</h1>
                <p className="text-sm mb-6 ">
                  Streamlined Library Management Solutions for Modern Readers
                </p>
                <Link to="/allBooks" className="pt-6">
                  <Button buttonText="View Books"></Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <div className="relative ">
            <div
              className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/dbGxMF3/crop-hands-using-tablet-library.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-teal-900 opacity-60"></div>
              {/* content */}
              <div className="absolute text-center space-y-4 text-white z-10 ">
                <h1 className="text-5xl mb-6">Organize, Engage, Thrive</h1>
                <h1 className="text-sm mb-6 ">
                  Elevate Your Library Experience with Innovative Management
                  Tools
                </h1>
                <Link to="/allBooks">
                  <Button buttonText="View Books"></Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <div className="relative ">
            <div
              className="bg-cover bg-center w-full h-80vh relative flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/dbGxMF3/crop-hands-using-tablet-library.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "80vh",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-teal-900 opacity-60"></div>
              {/* content */}
              <div className="absolute text-center space-y-4 text-white z-10 ">
                <h1 className="text-5xl mb-6">
                  Empowering Libraries, Empowering Communities
                </h1>
                <h1 className="text-sm mb-6 ">
                  Efficient Solutions to Enhance Access and Interaction in Your
                  Library Space
                </h1>
                <Link to="/allBooks">
                  <Button buttonText="View Books"></Button>
                </Link>
              </div>
            </div>
          </div>
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
