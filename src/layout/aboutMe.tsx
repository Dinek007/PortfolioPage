import { Typography, useTheme } from "@mui/material";
import { Box, Breakpoint } from "@mui/system";
import { PlanetScene } from "../three/planet/planetScene";

export const AboutMe: React.FC = () => {
  const theme = useTheme();
  const xxl = "xxl" as Breakpoint;

  return (
    <Box
      id="About me"
      sx={{
        position: "relative",
        top: "90px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "no-wrap",
        alignItems: "center",
        // backgroundColor: "rgb(20,20,20)",
      }}
    >
      <Box
        sx={{
          marginLeft: "5vw",
          width: "55vw",
          padding: "30px",
          backgroundColor: "rgb(10,10,10)",
          borderRadius: "5px",
          boxShadow: `0px 0px 8px 2px ${theme.palette.background.paper}`,
          zIndex: 1000,
          minWidth: "50vw",
          [theme.breakpoints.down("md")]: {
            minWidth: "89vw",
            marginTop: "170px",
          },
          [theme.breakpoints.down("sm")]: {
            marginTop: "130px",
          },
          [theme.breakpoints.up(xxl)]: {
            fontSize: "1.7rem",
            marginTop: "450px",
            marginBottom: "600px",
          },
          marginTop: "250px",
          marginBottom: "500px",
        }}
      >
        <Box
          sx={{
            marginBottom: "35px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.3rem",
              },
            }}
          >
            Welcome to my portfolio!
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "35px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.7rem",
              },
            }}
          >
            I'm Damian, Web Developer
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.9rem",
              },
              [theme.breakpoints.up(xxl)]: {
                fontSize: "1.7rem",
              },
            }}
          >
            I'm a ambitious web developer with the most experience in TypeScript
            and JavaScript. <br />
            I have a strong knowledge of React.js, including other related
            technologies such as redux(with redux-saga), three.js, node.js,
            material-UI, etc. <br />
            I'm a quick learner when it comes to new technologies, and I
            thoroughly enjoy communicating with others. I'm open to new
            collaborations and opportunities.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "1vw",
          width: "1500px",
          height: "1200px",
          [theme.breakpoints.up(xxl)]: {
            width: "1900px",
          },
        }}
      >
        <PlanetScene />
      </Box>
    </Box>
  );
};
