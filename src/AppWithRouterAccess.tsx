import { NavLink, Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation, useNavigate } from "react-router-dom";
import { JSX, lazy, useEffect, useRef } from "react";
import { Box, Button, Divider, Stack, Theme, useMediaQuery, useTheme } from "@mui/material";

const RootLayout = lazy(() => import("./layouts/RootLayout"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<RootLayout />}
                errorElement={<></>}
            >
                <Route index element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
                <Route path="home" element={<a>
                    Page content goes here
                </a>} />
            </Route>
        </>
    )
);

const AppWithRouterAccess = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export default AppWithRouterAccess;