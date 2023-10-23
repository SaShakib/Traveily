import { CardMedia, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import launch from "./launch.jpg";
import GradeIcon from "@material-ui/icons/Grade";

const useStyle = makeStyles((theme) => ({
  Paper: {
    minWidth: "400px",
    width: 600,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 280,
    },
    background: theme.palette.primary.main,
    display: "flex",
    height: 280,
    boxShadow: `0px 0px 10px #00000015`,
    borderRadius: 20,
  },
  Media: {
    height: "100%",
    width: 220,
    // minWidth: 200,
    borderRadius: 20,
    [theme.breakpoints.down("xs")]: {
      width: "200px",
    },
  },
  description: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  Details: {
    display: "flex",
    justifyContent: "space-between",
    width: "380px",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
    paddingTop: 12,
    paddingLeft: 16,
  },
}));
function ServiceCard() {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.Paper} elevation={0}>
        <CardMedia title="D" image={launch} className={classes.Media} />
        <div className={classes.Details}>
          <div>
            <div style={{ display: "flex" }}>
              <GradeIcon style={{ color: "#fff" }} />
              <Typography
                variant="body1"
                gutterBottom
                style={{ paddingLeft: 8, color: "#fff" }}
              >
                4.97(200)
              </Typography>
            </div>
            <Typography
              variant="h5"
              color="primary"
              style={{ fontFamily: "sans", fontStyle: "italic", color: "#fff" }}
            >
              Two Bed Cabin With Free wifi and Buffet Dinner
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography
                variant="body1"
                color="secondary"
                style={{ fontFamily: "sans" }}
              >
                AC, VIP
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                style={{
                  color: "#B85364",
                  fontFamily: "sans",
                  paddingLeft: 28,
                }}
              >
                10 pm
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                variant="body1"
                color="primary"
                style={{ fontFamily: "sans", paddingRight: 28, color: "#fff" }}
              >
                From: Dhaka
              </Typography>
              <Typography
                variant="body1"
                color="primary"
                gutterBottom
                style={{ fontFamily: "sans", color: "#fff" }}
              >
                To: Chitagong
              </Typography>
            </div>
            <Typography
              variant="caption"
              color="secondary"
              className={classes.description}
              style={{ fontFamily: "sans", fontStyle: "italic" }}
            >
              This a SundarBan Express service 11. You will find a awesome
              experience From this trip. We have well decorated plans and
              Services. This Service has Two bed cabin room with Ac and Free
              wifi. We wish you a happy journey.
            </Typography>
          </div>

          <div style={{ paddingRight: 8 }}>
            <Typography
              variant="h5"
              style={{ color: "#B85364", fontFamily: "sans" }}
            >
              $3000
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default ServiceCard;
