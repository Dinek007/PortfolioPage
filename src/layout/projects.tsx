import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import {
  projectLinks,
  projectsDescription,
  projectsNames,
  projectsTechnologies,
} from "../constants/text";
import { Tilt } from "react-tilt";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

import portfolioPic from "/projectsPictures/portfolio.png";
import worldOfNotesPic from "/projectsPictures/worldOfNotes.png";
import pokerPic from "/projectsPictures/poker.png";
import shopAppPic from "/projectsPictures/shopApp.png";
import quietPic from "/projectsPictures/quiet.png";
import { ProjectLinks } from "../components/projectLinks";

export const Projects = () => {
  const theme = useTheme();

  const projectsNamesArray = [
    {
      name: projectsNames.Quiet,
      description: projectsDescription.Quiet,
      technologies: projectsTechnologies.Quiet,
      src: quietPic,
    },
    {
      name: projectsNames.WorldOfNotes,
      description: projectsDescription.WorldOfNotes,
      technologies: projectsTechnologies.WorldOfNotes,
      src: worldOfNotesPic,
    },
    {
      name: projectsNames.ShipsGame,
      description: projectsDescription.ShipsGame,
      technologies: projectsTechnologies.ShipsGame,
      src: pokerPic,
    },
    {
      name: projectsNames.PortfolioPage,
      description: projectsDescription.PortfolioPage,
      technologies: projectsTechnologies.PortfolioPage,
      src: portfolioPic,
    },
    {
      name: projectsNames.ShopApp,
      description: projectsDescription.ShopApp,
      technologies: projectsTechnologies.ShopApp,
      src: shopAppPic,
    },
    {
      name: projectsNames.PokerGame,
      description: projectsDescription.PokerGame,
      technologies: projectsTechnologies.PokerGame,
      src: pokerPic,
    },
  ];

  return (
    <Box
      id="Projects"
      sx={{
        paddingTop: "150px",
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "rgb(90,90,90)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
        }}
      >
        <Typography color={theme.palette.text.secondary} variant="h1">
          Projects
        </Typography>
      </Box>

      <Box
        sx={{
          paddingTop: "170px",
          display: "flex",
          flexDirection: "row",
          alignContent: "baseline",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingBottom: "200px",
          [theme.breakpoints.down("sm")]: {
            width: "300px",
            paddingTop: "70px",
          },
        }}
      >
        {projectsNamesArray.map((item) => {
          return (
              <Tilt>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    width: "450px",
                    id: { item },
                    margin: "50px",
                    backgroundColor: "rgb(10,10,10)",
                    borderRadius: "5px",
                    boxShadow: `-1px -1px 4px 1px ${theme.palette.background.paper}, 1px 1px 4px 1px #007733`,
                    [theme.breakpoints.down("sm")]: {
                      width: "350px",
                    },
                    [theme.breakpoints.down("xs")]: {
                      width: "300px",
                    },
                    [theme.breakpoints.up("xxl")]: {
                      width: "550px",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      color={theme.palette.text.secondary}
                    >
                      {item.name}
                    </Typography>

                    <ProjectLinks name={item.name} />
                  </Box>
                  <Box
                    sx={{
                      paddingBottom: "5px",
                      marginBottom: "20px",
                    }}
                  >
                    <Typography variant="h6" color={"#aaffaa"}>
                      {item.technologies}
                    </Typography>
                  </Box>
                  <img
                    style={{
                      float: "left",
                      borderRadius: "15px",
                      marginBottom: "15px",
                    }}
                    src={item.src}
                    alt={item.name}
                  />

                  <Box>
                    <Typography variant="h6"> {item.description} </Typography>
                  </Box>
                </Box>

              </Tilt>
          );
        })}
      </Box>
    </Box>
  );
};
