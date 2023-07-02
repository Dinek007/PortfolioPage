import { Typography, useTheme } from "@mui/material";
import { Box, Breakpoint } from "@mui/system";
import {
  ExpirienceTitles,
  ExpirienceBodyTitles,
  ExpirienceBodyNames,
  ExpirienceBody,
} from "../constants/text";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Tab } from "../components/tab";

export const Expirience: React.FC = () => {
  const theme = useTheme();
  const xxl = "xxl" as Breakpoint;

  const expirienceBodyArray = [
    {
      date: ExpirienceTitles.student1,
      title: ExpirienceBodyTitles.student1,
      name: ExpirienceBodyNames.student1,
      body: ExpirienceBody.student1,
    },
    {
      date: ExpirienceTitles.student2,
      title: ExpirienceBodyTitles.student2,
      name: ExpirienceBodyNames.student2,
      body: ExpirienceBody.student2,
    },
    {
      date: ExpirienceTitles.webDeveloper,
      title: ExpirienceBodyTitles.webDeveloper,
      name: ExpirienceBodyNames.webDeveloper,
      body: ExpirienceBody.webDeveloper,
    },
    {
      date: ExpirienceTitles.conference,
      title: ExpirienceBodyTitles.conference,
      name: ExpirienceBodyNames.conference,
      body: ExpirienceBody.conference,
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
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          [theme.breakpoints.down("xs")]: {
            marginTop: "100px",
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
              <Box
                ref={ref}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    width: "280px",
                    [theme.breakpoints.down("md")]: {
                      width: "140px",
                    },
                  }}
                >
                  <Tab
                    body={item.date}
                    description={""}
                    name={""}
                    key={item.name}
                    isBorder={false}
                    isImage={false}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      left: "360px",
                      top: "-50px",
                      [theme.breakpoints.down("md")]: {
                        left: "220px",
                        top: "-65px",
                      },
                      [theme.breakpoints.up(xxl)]: {
                        top: "-58px",
                      },
                    }}
                  >
                    <TipsAndUpdatesIcon
                      sx={{
                        color: "black",
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
                    <Box
                      sx={{
                        position: "relative",
                        borderBottom: `2px solid #aa77aa`,
                        width: "200px",
                        left: "-100px",
                        top: "-27px",
                        zIndex: -100,
                      }}
                    ></Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    marginLeft: "100px",
                    width: "550px",
                    borderLeft: `2px solid #aa77aa`,
                    paddingLeft: "70px",
                    paddingBottom: "120px",
                    [theme.breakpoints.down("lg")]: {
                      width: "350px",
                    },
                    [theme.breakpoints.down("md")]: {
                      width: "290px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      width: "200px",
                      marginLeft: "0px",
                      paddingLeft: "15px",
                      borderLeft: `0px solid #aa77aa`,
                      paddingBottom: "70px",
                    },
                    [theme.breakpoints.up(xxl)]: {
                      width: "650px",
                    },
                  }}
                >
                  <Tab
                    body={item.body}
                    description={item.name}
                    name={item.title}
                    key={item.name}
                    isBorder={true}
                    isImage={false}
                  />
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};
