import { Outlet } from "react-router-dom";
import { Container, Paper, Stack } from "@mui/material";
import "~/App.css";
import { JSX } from "react";

const RootLayout = (): JSX.Element => {
    return (
        <div>
            <Paper>
                <Stack direction="column">
                    <Stack direction="row" sx={{ height: "100vh" }} spacing={0}>
                        <Paper elevation={0} sx={{ width: "100%", overflowY: "auto" }}>
                            <Container maxWidth={false} disableGutters>
                                <Outlet />
                            </Container>
                        </Paper>
                    </Stack>
                </Stack>
            </Paper>
        </div>
    );
};

export default RootLayout;
