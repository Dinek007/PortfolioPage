import ReactDOM from "react-dom/client";
import { StyledEngineProvider} from "@mui/material/styles";
import { App } from "./App";
import { ThemeProvider } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as any).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
