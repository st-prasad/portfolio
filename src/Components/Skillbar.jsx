// import PropTypes from "prop-types";
// import React, { useEffect, useState } from "react";

// const SkillBar = ({ name, percentage, color }) => {
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     setWidth(percentage);
//   }, [percentage]);

//   return (
//     <div className="mb-4">
//       <div className="text-lg font-bold text-gray-800 mb-2">{name}</div>
//       <div className="bg-gray-300 h-6 rounded-lg overflow-hidden">
//         <div
//           className={`h-full transition-all duration-1000 ease-out`}
//           style={{
//             width: `${width}%`,
//             animation: "grow-bar 2s ease-in-out",
//             animationFillMode: "forwards",
//             backgroundColor: `var(--${color})`
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// SkillBar.propTypes = {
//   name: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
// };

// export default SkillBar;
