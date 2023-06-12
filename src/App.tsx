import { Box } from "@mui/system";
import { Header } from "./layout/header";
import { AboutMe } from "./layout/aboutMe";
import { Expirience } from "./layout/expirience";
import { Skills } from "./layout/skills";
import { Projects } from "./layout/projects";
import { Contact } from "./layout/contact";

export const App = () => {

  return (
    <Box>
      <Header />
      <AboutMe />
      <Expirience />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
};

App.displayName = "AppComponent";
