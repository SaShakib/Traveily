import {
  Container,
  IconButton,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import YoutubeSearchedForOutlinedIcon from "@material-ui/icons/YoutubeSearchedForOutlined";
const useStyle = makeStyles((theme) => ({
  paperContent: {
    margin: `12px 0px`,
    padding: "10px 12px",
    width: "100%",
    boxShadow: "0px 0px 20px #00000026",
    borderRadius: 25,
    display: "flex",
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#1E2834",
    },
  },
}));

export default function SearchSection(props) {
  const classes = useStyle();
  const options = [{ name: "Fors" }, { name: "sfs" }];
  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paperContent} elevation={0}>
        <LocationOnOutlinedIcon style={{ marginRight: 8 }} color="primary" />
        <Autocomplete
          id="CategoryComp"
          fullWidth
          options={options}
          disableClearable
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                endAdornment: <></>,
              }}
              placeholder="Destination"
              fullWidth
              variant="standard"
            />
          )}
        />
        <IconButton style={{ padding: 0 }}>
          <YoutubeSearchedForOutlinedIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}
