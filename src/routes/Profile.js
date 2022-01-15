import React from "react";
import ContainerWrapper from "../UI/ContainerWrapper";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FlexBoxContainer from "../UI/FlexBoxContainer";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.user;

  return (
    <ContainerWrapper>
      <FlexBoxContainer>
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
              {user}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hello there {user}! Thank you very much for Signin up at
              PhotoGallery, we are a platform where anyone can provide its own
              pictures and gather inspiration by others! We cant wait to see
              what your favorite pictures are and what you will load up! Lets
              check to the most important Sites!
            </Typography>
          </CardContent>
          <Link
            to="/uploads"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="outlined" color="primary" sx={{ m: 1 }}>
              Uploads
            </Button>
          </Link>
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="outlined" color="primary" sx={{ m: 1 }}>
              Favorites
            </Button>
          </Link>
        </Card>
      </FlexBoxContainer>
    </ContainerWrapper>
  );
};

export default Profile;
