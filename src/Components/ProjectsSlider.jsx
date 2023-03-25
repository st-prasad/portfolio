import React from 'react'

const ProjectsSlider = () => {
  return (
    <div>ProjectsSlider</div>
  )
}

export default ProjectsSlider

// import React from 'react';
// import { projectsdata } from '../ProjectData';

// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";

// // import { Autoplay, Pagination, Scrollbar } from 'swiper';

// // import 'swiper/modules/pagination/pagination.min.css';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper.min.css';

// // import 'swiper/swiper-bundle.min.css';


// // import 'swiper/swiper.min.css';
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import '../swiper.css';
// // import 'swiper/modules/pagination/pagination.min.css';
// // import 'swiper/swiper.min.css';
// import { Pagination } from "swiper";
// import "swiper/css/pagination";


// function ProjectsSlider() {
//   return (
//     <Swiper
//     pagination={{
//         clickable: true,
//     }}
//     // autoplay={{
//     //     delay: 2500,
//     //     disableOnInteraction: false
//     // }}
//     // modules={[Autoplay, Pagination]}
//     modules={[ Pagination]}
//     className='mySwiper h-[75vh]'
//     >
//         {projectsdata.map((item, index) => {
//             const{authorImg, authorText, authorName, authorPosition } = item;
//             return (
//                 <SwiperSlide key={index}>
//                     <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 border w-1/2 items-center my-0 mx-auto">
//                         <div className="h-36 lg:w-[328px] lg:h-[328px]">
//                             <img className='rounded-2xl h-full' src={authorImg} alt="" />
//                         </div>
//                         <div className="flex flex-col max-w-3xl">
//                             <h5 className="font-helvetica text-2xl mb-8 italic font-normal">
//                                 {authorText}
//                             </h5>
//                         </div>
//                         <div>
//                             <p className="text-lg text-orange-600">
//                                 {authorText}
//                             </p>
//                             <p>{authorPosition}</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//             )
//         })}
//     </Swiper>
//   )
// }

// export default ProjectsSlider