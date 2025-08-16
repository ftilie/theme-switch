import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { JSX, lazy } from "react";

const RootLayout = lazy(() => import("~/layouts/RootLayout"));
const HomePage = lazy(() => import("~/pages/HomePage"));

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
                <Route path="home" element={<HomePage />} />
            </Route>
        </>
    )
);

const AppWithRouterAccess = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export default AppWithRouterAccess;