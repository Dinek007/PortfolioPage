import { Typography, useTheme } from "@mui/material";
import { Box, Breakpoint, width } from "@mui/system";
import { CubeScene } from "../three/cube/cubeScene";
import {
  LessSkillsNames,
  SkillsNames,
  SkillsNamesTitles,
} from "../constants/text";
import { Tooltip } from "react-tooltip";
import cssPic from "../assets/skillsTextures/css.png";
import electronPic from "../assets/skillsTextures/electron.png";
import gitPic from "../assets/skillsTextures/git.png";
import htmlPic from "../assets/skillsTextures/html.png";
import javascriptPic from "../assets/skillsTextures/javascript.png";
import materialUIPic from "../assets/skillsTextures/materialUI.png";
import nodejsPic from "../assets/skillsTextures/nodejs.png";
import reactPic from "../assets/skillsTextures/react.png";
import reduxSagaPic from "../assets/skillsTextures/reduxSaga.png";
import threePic from "../assets/skillsTextures/three.png";
import tsPic from "../assets/skillsTextures/ts.png";
import reduxPic from "../assets/skillsTextures/redux.png";
import { isMobile } from "react-device-detect";

export const Skills = () => {
  const theme = useTheme();
  const xxl = "xxl" as Breakpoint;

  const skillsArray = [
    {
      name: SkillsNames.nodejs,
      title: SkillsNamesTitles.nodejs,
      src: nodejsPic,
    },
    {
      name: SkillsNames.electron,
      title: SkillsNamesTitles.electron,
      src: electronPic,
    },
    {
      name: SkillsNames.javascript,
      title: SkillsNamesTitles.javascript,
      src: javascriptPic,
    },
    { name: SkillsNames.ts, title: SkillsNamesTitles.ts, src: tsPic },
    { name: SkillsNames.react, title: SkillsNamesTitles.react, src: reactPic },
    { name: SkillsNames.redux, title: SkillsNamesTitles.redux, src: reduxPic },
    {
      name: SkillsNames.reduxSaga,
      title: SkillsNamesTitles.reduxSaga,
      src: reduxSagaPic,
    },
    { name: SkillsNames.three, title: SkillsNamesTitles.three, src: threePic },
    { name: SkillsNames.git, title: SkillsNamesTitles.git, src: gitPic },
    { name: SkillsNames.html, title: SkillsNamesTitles.html, src: htmlPic },
    { name: SkillsNames.css, title: SkillsNamesTitles.css, src: cssPic },
    {
      name: SkillsNames.materialUI,
      title: SkillsNamesTitles.materialUI,
      src: materialUIPic,
    },
  ];

  const lessSkillsArray = [
    LessSkillsNames.chatGPT,
    LessSkillsNames.firebase,
    LessSkillsNames.netlify,
    LessSkillsNames.orbitdb,
    LessSkillsNames.libp2p,
    LessSkillsNames.swagger,
  ];

  return (
    <Box
      id="Skills"
      sx={{
        paddingTop: "150px",
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "rgb(100,100,100)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
        }}
      >
        <Typography color={theme.palette.text.secondary} variant="h1">
          Skills
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          alignContent: " center",
          paddingTop: "200px",
          paddingBottom: "200px",
          [theme.breakpoints.down("sm")]: {
            paddingTop: "100px",
          },
          [theme.breakpoints.up(xxl)]: {
            paddingBottom: "320px",
            paddingTop: "250px",
          },
        }}
      >
        {skillsArray.map((item) => {
          return (
            <Box
              id={item.name}
              key={item.name}
              data-tooltip-id={item.name}
              data-tooltip-content={item.title}
              data-tooltip-variant="dark"
              sx={{
                width: "270px",
                height: "270px",
                [theme.breakpoints.down("lg")]: {
                  width: "220px",
                  height: "220px",
                },
                [theme.breakpoints.down("md")]: {
                  width: "180px",
                  height: "180px",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "150px",
                  height: "150px",
                },
                [theme.breakpoints.down("xs")]: {
                  width: "130px",
                  height: "130px",
                },
                [theme.breakpoints.up(xxl)]: {
                  width: "330px",
                  height: "330px",
                },
              }}
            >
              {!isMobile ? (
                <CubeScene src={item.src} />
              ) : (
                <img
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%,0)",
                    width: "90%",
                    height: "90%",
                  }}
                  src={item.src}
                  alt={item.name}
                ></img>
              )}

              <Tooltip
                style={{
                  zIndex: 1000000000,
                  fontSize: 16,
                  color: theme.palette.text.secondary,
                  opacity: 100,
                  maxWidth: "350px",
                }}
                classNameArrow="bottom"
                id={item.name}
              />
            </Box>
          );
        })}

        {/* {lessSkillsArray.map((item) => {
          return(
          <Box 
                        id={item}

          sx={{
            width: "100px",
            height: "100px",
          }}>
            <CubeScene src={item} />
          </Box>
        )})} */}
      </Box>
    </Box>
  );
};
