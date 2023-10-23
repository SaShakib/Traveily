import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import cox from "./cox.jpg";
const style = {
  category: {
    position: "absolute",
    top: "15%",
    left: "20%",
    transform: `translate(-50%, -50%)`,
    color: "#fff",
    textAlign: "center",
    fontFamily: "sans",
    fontSize: "20px",
    fontWeight: 600,
    fontStyle: "italic",
    zIndex: 4,
  },
  products: {
    position: "absolute",
    bottom: 15,
    left: 20,

    zIndex: 4,
  },
  paper: {
    width: 250,
    height: 200,
    borderRadius: `32px`,
    boxShadow: `0px 0px 20px #00000015`,
  },
  media: {
    height: 200,
    width: 250,
  },
  font: {
    fontFamily: "sans",
    fontWeight: 600,
    color: "#fff",
    fontStyle: "italic",
  },
};
function LocationCard() {
  return (
    <div>
      <Card style={style.paper}>
        <CardActionArea color="#fff">
          <CardMedia title="D" image={cox} style={style.media} />
          <CardContent>
            <Typography variant="subtitle1" style={style.category}>
              Dhaka
            </Typography>
            <div style={style.products}>
              <Typography variant="h5" align="left" style={style.font}>
                Coz Bazar, Chittagong
              </Typography>
              <div style={{ display: "flex" }}>
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
                <GradeIcon />
                <Typography variant="subtitle2" color="primary">(20 reviews)</Typography>
              </div>
              <Typography variant="subtitle1" align="left" style={style.font}>
                20 Service
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default LocationCard;
