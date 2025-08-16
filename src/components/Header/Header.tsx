import { Stack, Typography } from "@mui/material";
import { DarkThemeHeaderColor } from "~/utils/Theme";
import { HEADER_HEIGHT, SIDE_PADDING } from "~/utils/Constants";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = (): JSX.Element => {
    return (
            <Stack sx={{ backgroundColor: DarkThemeHeaderColor, zIndex: 1, height: HEADER_HEIGHT, width: "100vw", alignSelf: "center" }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" pl={2} pr={8} sx={{ height: "100%" }}>
                    <Stack direction="row" alignItems="center" justifyContent="left">
                        <Typography variant="h6" sx={{ color: "white", paddingLeft: SIDE_PADDING }}>
                            Theme Switch
                        </Typography>
                    </Stack>
                <Stack direction="row" alignItems="center" justifyContent="flex-start">
                    <Stack direction={"row"}>
                        <ThemeSwitch sx={{ m: 1 }} defaultChecked />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Header;
