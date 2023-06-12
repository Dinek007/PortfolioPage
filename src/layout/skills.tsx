import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { CubeScene } from "../three/cube/cubeScene";
import {
  LessSkillsNames,
  SkillsNames,
  SkillsNamesTitles,
} from "../constants/text";
import { Tooltip } from "react-tooltip";

export const Skills = () => {
  const theme = useTheme();

  const skillsArray = [
    { name: SkillsNames.node, title: SkillsNamesTitles.node },
    { name: SkillsNames.electron, title: SkillsNamesTitles.electron },
    { name: SkillsNames.js, title: SkillsNamesTitles.js },
    { name: SkillsNames.ts, title: SkillsNamesTitles.ts },
    { name: SkillsNames.react, title: SkillsNamesTitles.react },
    { name: SkillsNames.redux, title: SkillsNamesTitles.redux },
    { name: SkillsNames.reduxSaga, title: SkillsNamesTitles.reduxSaga },
    { name: SkillsNames.three, title: SkillsNamesTitles.three },
    { name: SkillsNames.git, title: SkillsNamesTitles.git },
    { name: SkillsNames.html, title: SkillsNamesTitles.html },
    { name: SkillsNames.css, title: SkillsNamesTitles.css },
    { name: SkillsNames.materialUI, title: SkillsNamesTitles.materialUI },
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
          [theme.breakpoints.up("xxl")]: {
            paddingBottom: "320px",
            paddingTop: "250px",

          },
        }}
      >
        {skillsArray.map((item) => {
          return (
            <Box
              id={item.name}
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
                [theme.breakpoints.up("xxl")]: {
                  width: "330px",
                  height: "330px",
                },
              }}
            >
              <CubeScene src={item.name} />
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
