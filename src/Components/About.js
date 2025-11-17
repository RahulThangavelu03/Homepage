import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import Business_team from "../Business_team.json";

function AboutUs() {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        py: 10,
        px: 4,
        background: "#f8fbff",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        
        {/* LEFT — LOTTIE */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Lottie
              animationData={Business_team}
              loop
              style={{
                width: "450px",
                maxWidth: "100%",
              }}
            />
          </motion.div>
        </Grid>

        {/* RIGHT — TEXT */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 2, color: "#0a0a0a" }}
            >
              About Us
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#555",
                mb: 3,
                maxWidth: "90%",
                lineHeight: 1.6,
              }}
            >
              We are a passionate team of designers, developers, and innovators
              committed to building modern digital experiences that help
              businesses grow and succeed.
            </Typography>

            <Typography sx={{ fontSize: 18, mb: 1 }}>
              Innovation-driven development
            </Typography>
            <Typography sx={{ fontSize: 18, mb: 1 }}>
               Customer-first mindset
            </Typography>
            <Typography sx={{ fontSize: 18, mb: 3 }}>
               Quality-focused delivery
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                background: "#4a00e0",
                textTransform: "none",
                fontSize: "18px",
                px: 4,
                py: 1.2,
                borderRadius: "8px",
                "&:hover": {
                  background: "#3900b5",
                },
              }}
            >
              Learn More
            </Button>
          </motion.div>
        </Grid>

      </Grid>
    </Box>
  );
}

export default AboutUs;
