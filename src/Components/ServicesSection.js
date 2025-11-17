import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const services = [
  { title: "Digital Marketing", desc: "Grow your business with targeted campaigns." },
  { title: "Branding & Design", desc: "Crafting unique and memorable brand identities." },
  { title: "Web & Mobile App Development", desc: "Modern, responsive, and scalable apps." },
  { title: "Testing Services", desc: "Ensure quality with manual & automated testing." },
  { title: "Illustration & Modeling", desc: "Creative visuals and 3D modeling for your brand." }
];

const bounceVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 12,
    },
  },
};

function ServicesSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 10,
        px: 3,
        background: "#f7f9fa",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, mb: 4, color: "#111", letterSpacing: 0.5 }}
      >
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <motion.div
              variants={bounceVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  height: "100%",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  {service.desc}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ServicesSection;
