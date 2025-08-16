import { Outlet } from "react-router-dom";
import { Container, Paper, Stack } from "@mui/material";
import "~/App.css";
import { JSX } from "react";
import { HEADER_HEIGHT } from "~/utils/Constants";
import Header from "~/components/Header/Header";

const RootLayout = (): JSX.Element => {
    return (
        <div>
            <Paper>
                <Stack direction="column">
                    <Header />
                    <Stack direction="row" sx={{ height: `calc(100vh - ${HEADER_HEIGHT})` }} spacing={0}>
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
