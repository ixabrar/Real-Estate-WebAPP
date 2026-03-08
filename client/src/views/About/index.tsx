// MUI Imports
import { Box, Grid } from "@mui/material";
// Custom Imports
import { Heading, SubHeading } from "../../components/Heading";

const About = () => {
  return (
    <Box sx={{ margin: "65px 0 0 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Heading>About This Platform</Heading>
          <Box sx={{ margin: "20px 0", color: "#334155", fontSize: "16px" }}>
            Welcome to our modern Real Estate application, built with cutting-edge web technologies. This platform is designed to revolutionize how you discover, list, and manage properties in the digital age.
            <br />
            <br />
            Our mission is to provide a seamless, user-friendly experience for both property buyers and sellers. Whether you're looking to purchase your dream home, rent a property, or list your own real estate, we've created an intuitive platform that makes the entire process smooth and efficient.
            <br />
            <br />
            Built with React, Node.js, and MongoDB, this application demonstrates modern full-stack development practices. We are committed to continuous improvement and adding innovative features to enhance your real estate experience.
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "80px 0 75px 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "300px",
              }}
            >
              <Box sx={{ width: "75px", height: "75px" }}>
                <img
                  src="https://ui-avatars.com/api/?name=Sahikh+Rizwan&background=random&color=fff&size=128"
                  alt="Sahikh Rizwan"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </Box>
              <SubHeading sx={{ marginTop: "10px" }}>Sahikh Rizwan</SubHeading>
              <Box>7517458787</Box>
              <Heading sx={{ fontSize: "14px", marginTop: "10px" }}>
                Student / Web Developer
              </Heading>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
};

export default About;

