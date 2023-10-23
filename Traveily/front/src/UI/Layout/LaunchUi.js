import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Paper,
  Typography,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import GradeIcon from "@material-ui/icons/Grade";
import launch from "./launch.jpg";
const style = {
  media: {
    height: 200,
    width: "100%",
  },
  paper: {
    width: 320,
    height: 200,
    borderRadius: `20px`,
    boxShadow: `0px 0px 20px #00000015`,
  },
  PaperContent: {
    zIndex: 400,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: 280,
    position: "absolute",
    top: 110,
    borderRadius: "20px",
    transform: `translate(20px, 40px)`,
    boxShadow: `0px 0px 20px #00000015`,
  },
};
function LaunchUi() {
  return (
    <div style={{ position: "relative" }}>
      <Card style={style.paper}>
        <CardActionArea color="#fff">
          <CardMedia title="D" image={launch} style={style.media} />
        </CardActionArea>
      </Card>

      <Paper style={style.PaperContent} elevation={0}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <GradeIcon color="secondary" />
            <GradeIcon color="secondary" />
            <GradeIcon color="secondary" />
            <GradeIcon color="secondary" />
            <Typography variant="subtitle2" color="primary">
              (20 reviews)
            </Typography>
          </div>
          <FavoriteBorderOutlinedIcon />
        </div>
        <Typography
          variant="body1"
          style={{ fontStyle: "italic", marginTop: 8 }}
        >
          SUNDARBAN 11 EXPRESS LAUNCH
        </Typography>
      </Paper>
    </div>
  );
}

export default LaunchUi;
