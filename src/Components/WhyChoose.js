import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import whyChoose from "../WhyChooseUs.json";

const featureList = [
  "Experienced & Skilled Team",
  "Creative and Modern Design Approach",
  "On-Time Delivery Guarantee",
  "Affordable Pricing Models",
  "Customer-First Mindset",
  "End-to-End Development Support",
];

const textFade = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const listItemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
    },
  }),
};

const imageFloat = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function WhyChooseUs() {
  return (
    <Box
      id="whychoose"
      sx={{
        width: "100%",
        py: 10,
        px: 4,
        background: "#f9fafc",
      }}
    >
      <Grid container spacing={6} alignItems="center" justifyContent="center">

 
        <Grid item xs={12} md={6}>
          <motion.div
            variants={textFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 2, color: "#111" }}
            >
              Why Choose Us?
            </Typography>

            <Typography
              sx={{
                color: "#555",
                mb: 3,
                fontSize: "18px",
                maxWidth: "90%",
                lineHeight: 1.6,
              }}
            >
              We blend creativity, technology, and strategy to deliver results
              that help businesses grow with confidence.
            </Typography>

            {/* BULLET LIST */}
            <Box sx={{ pl: 2 }}>
              {featureList.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={listItemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      mb: 1.5,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1,
                    }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: "28px" }}>*</span>
                    {item}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>

        {/* RIGHT — LOTTIE ANIMATION */}
        <Grid item xs={12} md={6}>
          <motion.div
            variants={imageFloat}
            animate="animate"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Lottie
              animationData={whyChoose}
              loop={true}
              style={{
                width: "500px",
                maxWidth: "100%",
              }}
            />
          </motion.div>
        </Grid>

      </Grid>
    </Box>
  );
}

export default WhyChooseUs;
