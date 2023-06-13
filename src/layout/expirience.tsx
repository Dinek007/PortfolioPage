import { Typography, useTheme } from "@mui/material";
import { Box, Breakpoint } from "@mui/system";
import {
  ExpirienceTitles,
  ExpirienceBodyTitles,
  ExpirienceBodyNames,
  ExpirienceBody,
} from "../constants/text";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Tilt } from "react-tilt";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const Expirience = () => {
  const theme = useTheme();
  const xxl = "xxl" as Breakpoint;

  const expirienceTitlesArray = [
    ExpirienceTitles.student1,
    ExpirienceTitles.student2,
    ExpirienceTitles.webDeveloper,
  ];

  const expirienceBodyArray = [
    {
      title: ExpirienceBodyTitles.student1,
      name: ExpirienceBodyNames.student1,
      body: ExpirienceBody.student1,
    },
    {
      title: ExpirienceBodyTitles.student2,
      name: ExpirienceBodyNames.student2,
      body: ExpirienceBody.student2,
    },
    {
      title: ExpirienceBodyTitles.webDeveloper,
      name: ExpirienceBodyNames.webDeveloper,
      body: ExpirienceBody.webDeveloper,
    },
  ];

  return (
    <Box
      id="Expirience"
      sx={{
        paddingTop: "150px",
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "200px",
        // backgroundColor: "rgb(40,40,40)",
        [theme.breakpoints.down("lg")]: {},
      }}
    >
      <Box
        sx={{
          position: "absolute",
        }}
      >
        <Typography color={theme.palette.text.secondary} variant="h1">
          {" "}
          Expirience{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "200px",
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "35vw",
          height: "1250px",
          borderRight: `2px solid #aa77aa`,
          [theme.breakpoints.down("lg")]: {
            height: "1300px",
          },
          [theme.breakpoints.down("md")]: {
            height: "1700px",
          },
          [theme.breakpoints.down("xs")]: {
            marginTop: "100px",
          },
          [theme.breakpoints.down("sm")]: {
            height: "2200px",
            borderRight: 0,
          },
        }}
      >
        {expirienceTitlesArray.map((item) => {
          const ref = useRef(null);
          const { scrollYProgress }: { scrollYProgress: any } = useScroll({
            target: ref,
            offset: ["start end", "start center"],
          });
          return (
            <Box key={item}>
              <motion.div style={{ opacity: scrollYProgress }}>
                <Tilt>
                  <Box
                    ref={ref}
                    sx={{
                      position: "relative",
                      display: "flex",
                      width: "250px",
                      padding: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                      id: { item },
                      marginRight: "50px",
                      backgroundColor: "rgb(10,10,10)",
                      borderRadius: "5px",
                      boxShadow: `-1px -1px 4px 1px ${theme.palette.background.paper}, 1px 1px 4px 1px #007733`,
                      [theme.breakpoints.down("sm")]: {
                        width: "100px",
                        padding: "15px",
                        marginRight: "0px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        [theme.breakpoints.down("sm")]: {
                          fontSize: "0.9rem",
                        },
                        [theme.breakpoints.down("md")]: {
                          fontSize: "0.9rem",
                        },
                      }}
                      variant="h6"
                    >
                      {" "}
                      {item}{" "}
                    </Typography>
                  </Box>
                </Tilt>
              </motion.div>
              <Box
                sx={{
                  height: "0px",
                  width: "130px",
                  top: "-30px",
                  border: `1px solid #aa77aa`,
                  position: "relative",
                  left: "260px",
                  [theme.breakpoints.down("sm")]: {
                    left: "90px",
                    top: "-50px",
                    fontSize: "0.9rem",
                    width: "130px",
                    border: 0,
                  },
                }}
              >
                <TipsAndUpdatesIcon
                  sx={{
                    position: "absolute",
                    left: "20px",
                    color: "black",
                    transform: "translate(0, -50%)",
                    backgroundColor: theme.palette.text.secondary,
                    borderRadius: "100%",
                    padding: "4px",
                    fontSize: "40px",
                    boxShadow: `0px 0px 6px 2px ${theme.palette.background.paper}`,
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "30px",
                    },
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          marginTop: "200px",
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "50vw",
          height: "1250px",
          [theme.breakpoints.down("lg")]: {
            height: "1300px",
          },
          [theme.breakpoints.down("md")]: {
            height: "1700px",
          },
          [theme.breakpoints.down("xs")]: {
            marginTop: "100px",
          },
          [theme.breakpoints.down("sm")]: {
            height: "2200px",
          },
        }}
      >
        {expirienceBodyArray.map((item) => {
          const ref = useRef(null);
          const { scrollYProgress }: { scrollYProgress: any } = useScroll({
            target: ref,
            offset: ["start end", "start center"],
          });
          return (
            <motion.div style={{ opacity: scrollYProgress }} key={item.name}>
              <Tilt>
                <Box
                  ref={ref}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    width: "450px",
                    id: { item },
                    marginLeft: "100px",
                    backgroundColor: "rgb(10,10,10)",
                    borderRadius: "5px",
                    boxShadow: `-1px -1px 4px 1px ${theme.palette.background.paper}, 1px 1px 4px 1px #007733`,
                    [theme.breakpoints.down("lg")]: {
                      width: "350px",
                    },
                    [theme.breakpoints.down("md")]: {
                      width: "250px",
                      marginLeft: "80px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      width: "170px",
                      marginLeft: "25px",
                      padding: "15px",
                    },
                    [theme.breakpoints.up(xxl)]: {
                      width: "650px",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      color={theme.palette.text.secondary}
                    >
                      {" "}
                      {item.title}{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      paddingBottom: "5px",
                      marginBottom: "20px",
                      borderBottom: `1px solid #ff99ff`,
                    }}
                  >
                    <Typography variant="h6" color={"#aaffaa"}>
                      {" "}
                      {item.name}{" "}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        [theme.breakpoints.down("sm")]: {
                          fontSize: "0.9rem",
                        },
                        [theme.breakpoints.up(xxl)]: {
                          fontSize: "1.3rem",
                        },
                      }}
                      variant="h6"
                    >
                      {" "}
                      {item.body}{" "}
                    </Typography>
                  </Box>
                </Box>
              </Tilt>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};
