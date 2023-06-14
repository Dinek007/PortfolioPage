import { Typography, useTheme } from "@mui/material";
import { Box, Breakpoint } from "@mui/system";
import {
  projectsDescription,
  projectsNames,
  projectsTechnologies,
} from "../constants/text";
import { Tilt } from "react-tilt";

import portfolioPic from "../assets/projectsPictures/portfolio.png";
import worldOfNotesPic from "../assets/projectsPictures/worldOfNotes.png";
import pokerPic from "../assets/projectsPictures/poker.png";
import shopAppPic from "../assets/projectsPictures/shopApp.png";
import quietPic from "../assets/projectsPictures/quiet.png";
import shipsPic from "../assets/projectsPictures/ships.png";

import { ProjectLinks } from "../components/projectLinks";
import { Tab } from "../components/tab";

export const Projects = () => {
  const theme = useTheme();
  const xxl = "xxl" as Breakpoint;

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
      src: shipsPic,
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
            <Box
              sx={{
                width: "450px",
                margin: "50px",
                [theme.breakpoints.down("sm")]: {
                  width: "350px",
                },
                [theme.breakpoints.down("xs")]: {
                  width: "300px",
                },
                [theme.breakpoints.up(xxl)]: {
                  width: "550px",
                },
              }}
            >
              <Tab
                body={item.description}
                description={item.technologies}
                name={item.name}
                key={item.name}
                imgSource={item.src}
                isBorder={false}
                isImage={true}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
