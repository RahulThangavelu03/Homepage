import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

function FooterSection() {
  return (
    <Box sx={{ mt: 10 }}>

     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            py: 10,
            textAlign: "center",
            background: "linear-gradient(135deg, #8DDCDC, #8e2de2)",
            color: "white",
            borderRadius: "20px",
            mx: 3,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Build Something Amazing?
          </Typography>

          <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
            Let’s turn your ideas into a powerful digital experience.
          </Typography>

          <Button
            variant="contained"
            sx={{
              background: "#fff",
              color: "#8e2de2",
              fontSize: "18px",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                background: "#e9e9e9",
              },
            }}
          >
            Let’s Work Together
          </Button>
        </Box>
      </motion.div>


      {/* FOOTER SECTION */}
      <Box
        sx={{
          background: "#0f0f0f",
          color: "white",
          mt: 6,
          py: 8,
          px: 4,
        }}
      >
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Vedhanthi Technologies
            </Typography>
            <Typography sx={{ color: "#ccc" }}>
              Crafting digital products with creativity, passion,
              and innovation.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Typography sx={{ mb: 1, color: "#ccc" }}>Home</Typography>
            <Typography sx={{ mb: 1, color: "#ccc" }}>About</Typography>
            <Typography sx={{ mb: 1, color: "#ccc" }}>Services</Typography>
            <Typography sx={{ mb: 1, color: "#ccc" }}>Contact</Typography>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Services
            </Typography>
            <Typography sx={{ mb: 1, color: "#ccc" }}>Digital Marketing</Typography>
            <Typography sx={{ mb: 1, color: "#ccc" }}>Branding & Design</Typography>
            <Typography sx={{ mb: 1, color: "#ccc" }}>App Development</Typography>
            <Typography sx={{ mb: 1, color: "#ccc" }}>Testing Services</Typography>
          </Grid>
        </Grid>

        <Typography
          sx={{
            textAlign: "center",
            mt: 6,
            pt: 3,
            borderTop: "1px solid #333",
            color: "#aaa",
          }}
        >
          © 2025 YourCompany. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterSection;
