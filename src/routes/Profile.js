import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Container } from "@mui/material";
const Profile = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Card sx={{ maxWidth: "sm", padding: 3, textAlign: "center" }}>
        <Avatar
          alt="Random User"
          src="https://source.unsplash.com/random"
          sx={{
            width: 240,
            height: 240,
            margin: "0 auto",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            UserName
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description about the user Description about the user Description
            about the user Description about the user Description about the user
            Description about the user Description about the user Description
            about the user Description about the user Description about the user
            Description about the user Description about the user Description
            about the user
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;