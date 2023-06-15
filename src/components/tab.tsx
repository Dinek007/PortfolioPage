import { Typography, useTheme } from "@mui/material";
import { Box, Breakpoint } from "@mui/system";
import { ProjectLinks } from "./projectLinks";
import { Tilt } from "react-tilt";

export const Tab: React.FC<{
  name: string;
  description: string;
  body: string;
  isBorder: boolean;
  isImage: boolean;
  imgSource?: string;
}> = ({ name, description, imgSource, body, isBorder, isImage }) => {
  const theme = useTheme();
  const xxl = "xxl" as Breakpoint;

  return (
    <Tilt key={name}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          id: name,
          backgroundColor: "rgb(10,10,10)",
          borderRadius: "5px",
          boxShadow: `-2px -2px 6px 1px ${theme.palette.background.paper}, 2px 2px 6px 1px #007733`,
        }}
      >
        {name && (
          <Box>
            <Typography variant="h3" color={theme.palette.text.secondary}>
              {name}
            </Typography>

            <ProjectLinks name={name} />
          </Box>
        )}

        {description && (
          <Box
            sx={{
              paddingBottom: "5px",
              marginBottom: "20px",
            }}
          >
            <Typography
              sx={{
                paddingBottom: isBorder && "5px",
                borderBottom: isBorder && `1px solid #ff99ff`,
              }}
              variant="h6"
              color={"#aaffaa"}
            >
              {description}
            </Typography>
          </Box>
        )}

        {isImage && (
          <img
            style={{
              opacity: "82%",
              float: "left",
              borderRadius: "15px",
              marginBottom: "15px",
            }}
            src={imgSource}
            alt={name}
          />
        )}

        {body && (
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
              {body}{" "}
            </Typography>
          </Box>
        )}
      </Box>
    </Tilt>
  );
};
