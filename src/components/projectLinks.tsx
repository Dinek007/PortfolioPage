import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { projectLinks } from "../constants/text";

export const ProjectLinks = ({name}) => {
  const theme = useTheme();

  const links = projectLinks.find((item)=> {
        return name === item.name
  })

  return (
    <Box
    sx={{
        position: "absolute",
        top: "10px",
        right: "5px"
    }}
  >
    <a
      href={links.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon
        sx={{
          fontSize: "28px",
          color: theme.palette.text.secondary,
          marginRight: "8px",
        }}
      />
    </a>
    <a
      href={links.webPage}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LaunchIcon
        sx={{
          fontSize: "28px",
          color: theme.palette.text.secondary,
        }}
      />
    </a>
  </Box>
  );
};
