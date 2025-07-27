import { JSX, Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import AppWithRouterAccess from "./AppWithRouterAccess";
import { customMuiTheme } from "./utils/Theme";

function App(): JSX.Element {
    return (
        <ThemeProvider theme={customMuiTheme}>
            <Suspense fallback={<></>}>
                <AppWithRouterAccess />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
