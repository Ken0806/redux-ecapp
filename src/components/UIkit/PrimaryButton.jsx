import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import React from "react";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#4dd0e1",
    color: "#000",
    fontSize: 16,
    height: 48,
    marginBottomn: 16,
    width: 256,
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
});

const PrimaryButton = (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
