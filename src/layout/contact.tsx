import { Typography, useTheme } from "@mui/material";
import { Box, Breakpoint } from "@mui/system";
import { contacts } from "../constants/text";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LaunchIcon from "@mui/icons-material/Launch";

export const Contact = () => {
  const theme = useTheme();
  const xxl = "xxl" as Breakpoint;

  const contactsArray = [
    { content: contacts.email, icon: EmailIcon, link: "" },
    { content: contacts.phone, icon: PhoneIcon, link: "" },
    {
      content: contacts.github,
      icon: GitHubIcon,
      link: "https://github.com/Dinek007",
    },
    {
      content: contacts.linkedin,
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/in/damian-wilk-1843931b9/",
    },
  ];

  return (
    <Box
      id="Contact"
      sx={{
        paddingTop: "90px",
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        //backgroundColor: "rgb(20,20,20)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
        }}
      >
        <Typography color={theme.palette.text.secondary} variant="h1">
          Contact
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "170px",
          marginBottom: "100px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "20px",
          width: "600px",
          height: "650px",
          backgroundColor: "rgb(10,10,10)",
          borderRadius: "5px",
          boxShadow: `-1px -1px 4px 1px ${theme.palette.background.paper}, 1px 1px 4px 1px #007733`,
          [theme.breakpoints.down("md")]: {
            width: "500px",
            height: "550px",
          },
          [theme.breakpoints.down("sm")]: {
            width: "330px",
            height: "450px",
            marginTop: "100px",
            padding: "20px",
            left: "2vw",
          },
          [theme.breakpoints.up(xxl)]: {
            marginBottom: "300px",
          },
        }}
      >
        {contactsArray.map((item) => {
          return (
            <Box
              key={item.content}
              sx={{
                width: "400px",
                display: "flex",
                padding: "20px",
                justifyContent: "flex-start",
                alignContent: "center",
                alignItems: "center",
                [theme.breakpoints.down("sm")]: {
                  width: "330px",
                },
              }}
            >
              <item.icon
                sx={{
                  color: theme.palette.text.secondary,
                  marginRight: "30px",
                  fontSize: "30px",
                }}
              />

              <Typography
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.9rem",
                  },
                }}
                variant="h5"
              >
                {" "}
                {item.content}
              </Typography>

              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <LaunchIcon
                    sx={{
                      position: "relative",
                      left: "10px",
                      top: "2px",
                      fontSize: "20px",
                      color: "#aaffaa",
                    }}
                  />
                </a>
              ) : (
                <></>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
