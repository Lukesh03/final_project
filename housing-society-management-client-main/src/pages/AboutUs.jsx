import React from 'react';
import Header from "../components/Header";
import { Box, Grid,Typography, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Photo1 from "../images/photo1.jpg";
import Photo2 from "../images/photo2.jpg";
import Photo3 from "../images/photo3.jpg";
import Photo4 from "../images/photo4.jpg";
import Photo5 from "../images/photo5.jpg";
import Photo6 from "../images/photo6.jpg";

const AboutUs = () => {
    return (
        <div>
            <Header />

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 5 , mt: 10}}>
                <Typography variant='h5'><strong>About Us</strong></Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 5 , mt: 0}}>

                <Grid spacing={8} container>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="360"
                                    image={Photo1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      <strong>Vaishnavi Kharde</strong> 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Role: Team Leader
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Developed: User Profile, Authentication
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="360"
                                    image={Photo2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      <strong>Lukesh Chaudhari</strong> 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Role: Team Member
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Developed: User Profile, Authentication
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="360"
                                    image={Photo3}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      <strong> Abhishek Pateria</strong> 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Role: Team Member
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Developed: User Profile, Authentication
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="360"
                                    image={Photo4}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      <strong>Harshwardhan Gaikwad</strong> 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Role: Team Member
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Developed: User Profile, Authentication
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="360"
                                    image={Photo5}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      <strong>Shivani Wakare</strong> 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Role: Team Member
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Developed: User Profile, Authentication
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="360"
                                    image={Photo6}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                     <strong> Sankar Khilare</strong>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Role: Team Member
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Developed: User Profile, Authentication
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default AboutUs