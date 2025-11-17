// import React from "react";
// import { Box, Button, Typography } from "@mui/material";
// import { motion } from "framer-motion"
// import Lottie from "lottie-react";


// import Man_and_robot from "../Man_and_robot.json"

// function HeroSection() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         minHeight: "20vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         px: { xs: 2, md: 10 },
//         pt: { xs: 12, md: 15 },
//       }}
//     >
//       {/* LEFT TEXT */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         style={{ flex: 1 }}
//       >
//         <Typography
//           variant="h2"
//           sx={{
//             fontWeight: 800,
//             fontSize: { xs: "2rem", md: "3.5rem" },
//             color: "#0F1E3A",
//           }}
//         >
//           Transforming Ideas  
//           <br /> Into Digital Reality
//         </Typography>

//         <Typography
//           sx={{
//             fontSize: "1.2rem",
//             mt: 4,
//             color: "#555",
//             maxWidth: "480px",
//           }}
//         >
//           We build innovative software solutions using modern technologies
//           to help your business grow faster.
//         </Typography>

//         <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#0A84FF",
//               px: 4,
//               py: 1.5,
//               borderRadius: 3,
//               fontWeight: 600,
//             }}
//           >
//             Get Started
//           </Button>

//           <Button
//             variant="outlined"
//             sx={{
//               px: 4,
//               py: 1.5,
//               borderRadius: 3,
//               fontWeight: 600,
//               borderColor: "#0A84FF",
//               color: "#0A84FF",
//             }}
//           >
//             Learn More
//           </Button>
//         </Box>
//       </motion.div>

//       {/* RIGHT ANIMATION */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.85 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.2 }}
//         style={{ flex: 1, display: "flex", justifyContent: "center" }}
//       >
//         <Lottie
//           animationData={Man_and_robot}
//           loop={true}
//           style={{
//             width: "500px",
//             maxWidth: "100%",
//           }}
//         />
//       </motion.div>
//     </Box>
//   );
// }

// export default HeroSection;


import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import Man_and_robot from "../Man_and_robot.json";

function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "20vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // responsive
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 10 },
        pt: { xs: 12, md: 15 },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ flex: 1 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3.5rem" },
            color: "#0F1E3A",
          }}
        >
          Transforming Ideas  
          <br /> Into Digital Reality
        </Typography>

        <Typography
          sx={{
            fontSize: "1.2rem",
            mt: 4,
            color: "#555",
            maxWidth: "480px",
            textAlign: { xs: "center", md: "left" }, // mobile-friendly
          }}
        >
          We build innovative software solutions using modern technologies
          to help your business grow faster.
        </Typography>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0A84FF",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600,
            }}
          >
            Get Started
          </Button>

          <Button
            variant="outlined"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600,
              borderColor: "#0A84FF",
              color: "#0A84FF",
            }}
          >
            Learn More
          </Button>
        </Box>
      </motion.div>

      {/* RIGHT ANIMATION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Lottie
          animationData={Man_and_robot}
          loop={true}
          style={{
            width: "100%",
            maxWidth: "420px", // responsive
            height: "auto",
          }}
        />
      </motion.div>
    </Box>
  );
}

export default HeroSection;
