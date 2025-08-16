import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { HEADER_HEIGHT } from "~/utils/Constants";

const HomePage = (): JSX.Element => {
    return (
        <Stack sx={{height: `calc(100vh - ${HEADER_HEIGHT})`, alignItems: "center", justifyContent: "center"}}>
            <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="/public/assets/bird.png"
                    alt="bird"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        Lorem Ipsum
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Stack>
    );
};

export default HomePage;
