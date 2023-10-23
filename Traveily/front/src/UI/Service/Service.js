import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GradeIcon from "@material-ui/icons/Grade";
import mv1 from "./mv1.jpg";
import mv2 from "./mv2.jpg";
import mv3 from "./mv3.jpg";
import mv4 from "./mv4.jpg";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import InlineDatePickerDemo from "../Layout/DatePicker/DatePicker";
// import DatePickerIndex from "../Layout/DatePicker/DatePicker";

const usestyle = makeStyles((theme) => ({
  media: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 0px 10px #00000026",
    borderRadius: 20,
  },
  subMedia: {
    height: "auto",

    width: "33%",
    paddingRight: 6,
    paddingLeft: 6,
    borderRadius: 12,
  },
  paper: {
    boxShadow: "0px 0px 10px #00000026",
    width: "320px",
    paddingRight: 29,
    paddingLeft: 40,
    borderRadius: "20px 20px 0 20px",
  },
}));
function Service() {
  const [image, setImage] = useState(mv1);
  const classes = usestyle();
  return (
    <div>
      <Container maxWidth="lg" component="main">
        <Grid container justify="center" style={{ paddingTop: 12 }}>
          <Grid
            item
            xs={12}
            md={6}
            style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 12 }}
          >
            <Link to="#">
              <img src={image} alt="" className={classes.media} />
            </Link>
            <div style={{ paddingTop: 12 }}>
              <Link to="#">
                <img
                  src={mv2}
                  alt=""
                  className={classes.subMedia}
                  onClick={() => setImage(mv2)}
                />
              </Link>
              <Link to="#">
                <img
                  src={mv3}
                  alt=""
                  className={classes.subMedia}
                  onClick={() => setImage(mv3)}
                />
              </Link>
              <Link to="#">
                <img
                  src={mv4}
                  alt=""
                  className={classes.subMedia}
                  onClick={() => setImage(mv4)}
                />
              </Link>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ paddingLeft: 15, paddingRight: 15 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <GradeIcon />
                <Typography variant="h5" style={{ paddingLeft: 8 }}>
                  4.97
                </Typography>
              </div>

              <Typography
                variant="h4"
                style={{ color: "#B85364", fontFamily: "sans" }}
              >
                $3000
              </Typography>
            </div>
            <Typography
              variant="h4"
              gutterBottom
              color="primary"
              style={{ fontFamily: "sans", fontStyle: "italic" }}
            >
              Two Bed Cabin With Free wifi and Buffet Dinner
            </Typography>
            <Typography
              variant="h5"
              color="secondary"
              style={{ fontFamily: "sans" }}
            >
              AC, VIP
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              style={{ color: "#B85364", fontFamily: "sans" }}
            >
              10 pm
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              style={{ fontFamily: "sans" }}
            >
              From: Dhaka
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              style={{ fontFamily: "sans" }}
            >
              To: Chitagong
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              color="secondary"
              style={{ fontFamily: "sans", fontStyle: "italic" }}
            >
              This a SundarBan Express service 11. You will find a awesome
              experience From this trip. We have well decorated plans and
              Services. This Service has Two bed cabin room with Ac and Free
              wifi. We wish you a happy journey.
            </Typography>
          </Grid>
        </Grid>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Paper className={classes.paper}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                color="secondary"
                style={{ fontFamily: "sans", paddingRight: 8 }}
              >
                Adults:
              </Typography>
              <div>
                <IconButton>
                  <AddIcon color="primary" />
                </IconButton>
                <span>1</span>
                <IconButton>
                  <RemoveIcon color="primary" />
                </IconButton>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                color="secondary"
                style={{ fontFamily: "sans", paddingRight: 8 }}
              >
                Children:
              </Typography>
              <div>
                <IconButton>
                  <AddIcon color="primary" />
                </IconButton>
                <span>1</span>
                <IconButton>
                  <RemoveIcon color="primary" />
                </IconButton>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                color="secondary"
                style={{ fontFamily: "sans", paddingRight: 8 }}
              >
                Date:
              </Typography>
              <InlineDatePickerDemo color="primary" />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                color="secondary"
                style={{ fontFamily: "sans", paddingRight: 8 }}
              >
                Total:
              </Typography>
              <div>
                <IconButton>
                  <AddIcon color="primary" />
                </IconButton>
                <span>1</span>
                <IconButton>
                  <RemoveIcon color="primary" />
                </IconButton>
              </div>
            </div>
          </Paper>
        </div>
      </Container>
    </div>
  );
}

export default Service;
