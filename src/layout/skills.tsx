import { Typography, useTheme } from "@mui/material";
import { Box, Breakpoint, width } from "@mui/system";
import { CubeScene } from "../three/cube/cubeScene";
import {
  LessSkillsNames,
  LessSkillsNamesTitles,
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
import chatGPTPic from "../assets/skillsTextures/chatGPT.png";
import cppPic from "../assets/skillsTextures/cpp.png";
import firebasePic from "../assets/skillsTextures/firebase.png";
import jestPic from "../assets/skillsTextures/jest.png";
import libp2pPic from "../assets/skillsTextures/libp2p.png";
import netlifyPic from "../assets/skillsTextures/netlify.png";
import reactTestingLibraryPic from "../assets/skillsTextures/reactTestingLibrary.png";
import swaggerPic from "../assets/skillsTextures/swagger.png";
import { Tilt } from "react-tilt";
import Sunset from "../fonts/Sunset.ttf";

export const Skills: React.FC = () => {
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
    {
      name: SkillsNames.jest,
      title: SkillsNamesTitles.jest,
      src: jestPic,
    },
    {
      name: SkillsNames.reactTestingLibrary,
      title: SkillsNamesTitles.reactTestingLibrary,
      src: reactTestingLibraryPic,
    },
  ];

  const lessSkillsArray = [
    {
      name: LessSkillsNames.chatGPT,
      title: LessSkillsNamesTitles.chatGPT,
      src: chatGPTPic,
    },
    {
      name: LessSkillsNames.firebase,
      title: LessSkillsNamesTitles.firebase,
      src: firebasePic,
    },
    {
      name: LessSkillsNames.netlify,
      title: LessSkillsNamesTitles.netlify,
      src: netlifyPic,
    },
    {
      name: LessSkillsNames.libp2p,
      title: LessSkillsNamesTitles.libp2p,
      src: libp2pPic,
    },
    {
      name: LessSkillsNames.swagger,
      title: LessSkillsNamesTitles.swagger,
      src: swaggerPic,
    },
    {
      name: LessSkillsNames.cpp,
      title: LessSkillsNamesTitles.cpp,
      src: cppPic,
    },
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
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            alignContent: " center",
            paddingTop: "200px",
            [theme.breakpoints.down("sm")]: {
              paddingTop: "100px",
            },
            [theme.breakpoints.up(xxl)]: {
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
                  width: "240px",
                  height: "240px",
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
                    color: "#ffbbff",
                    opacity: 100,
                    maxWidth: "350px",
                    backgroundColor: "#121212",
                    boxShadow: `0px 0px 100px 0px #aa77aa`,
                    fontFamily: Sunset,
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                  classNameArrow="bottom"
                  id={item.name}
                />
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: "200px",
            marginBottom: "200px",
            backgroundColor: "rgb(10,10,10)",
            borderRadius: "5px",
            padding: "30px",
            //boxShadow: `0px 0px 4px 1px ${theme.palette.background.paper}`,
            [theme.breakpoints.down("sm")]: {
              marginTop: "100px",
            },
            [theme.breakpoints.up(xxl)]: {
              marginBottom: "320px",
              marginTop: "250px",
            },
          }}
        >
          <Typography color={"#aaaaaa"} variant="h3">
            Less Skills
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingTop: "15px",
            }}
          >
            {lessSkillsArray.map((item) => {
              return (
                <>
                  <Tilt>
                    <Box
                      id={item.name}
                      key={item.name}
                      data-tooltip-id={item.name}
                      data-tooltip-content={item.title}
                      data-tooltip-variant="dark"
                      sx={{
                        opacity: "70%",
                        width: "70px",
                        height: "70px",
                        [theme.breakpoints.down("lg")]: {
                          width: "60px",
                          height: "60px",
                        },
                        [theme.breakpoints.down("md")]: {
                          width: "50px",
                          height: "50px",
                        },
                        [theme.breakpoints.down("sm")]: {
                          width: "40px",
                          height: "40px",
                        },
                        [theme.breakpoints.down("xs")]: {
                          width: "30px",
                          height: "30px",
                        },
                        [theme.breakpoints.up(xxl)]: {
                          width: "90px",
                          height: "90px",
                        },
                      }}
                    >
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
                    </Box>
                  </Tilt>
                  <Tooltip
                    style={{
                      zIndex: 1000000000,
                      fontSize: 16,
                      color: "#ffbbff",
                      opacity: 100,
                      maxWidth: "350px",
                      backgroundColor: "#121212",
                      boxShadow: `0px 0px 15px 5px #aa77aa`,
                      fontFamily: Sunset,
                      borderRadius: "12px",
                      padding: "20px",
                    }}
                    classNameArrow="bottom"
                    id={item.name}
                  />
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
