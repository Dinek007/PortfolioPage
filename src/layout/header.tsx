import { Box } from "@mui/system";
import { HeaderSections } from "../constants/text";
import { Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-scroll";

export const Header = () => {
  const sectionsNames: HeaderSections[] = [
    HeaderSections.AboutMe,
    HeaderSections.Expirience,
    HeaderSections.Skills,
    HeaderSections.Projects,
    HeaderSections.Contact,
  ];

  const theme = useTheme();

  return (
    <Box
      sx={{
        zIndex: 100000000,
        top: "0px",
        position: "fixed",
        width: "100%",
        height: "90px",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "no-wrap",
        [theme.breakpoints.down('sm')]: {
          flexWrap: "wrap",
          height: "120px",
        },
      }}
    >
      <Box
        sx={{
          marginLeft: "5%",
          [theme.breakpoints.down('sm')]: {
            width: "100%",
            textAlign: "center"

          },
        }}
      >
        <Typography variant="caption">D. W.</Typography>
      </Box>

      <Box
        sx={{
          marginRight: "5%",
          display: "flex",
          [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap",
          },
        }}
      >
        {sectionsNames.map((item) => {
          return (
            <Box key={item}>
              <Button>
                <Link to={item} smooth={true} >
                  <Typography color={theme.palette.text.secondary} variant="h5">{item}</Typography>
                </Link>
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
