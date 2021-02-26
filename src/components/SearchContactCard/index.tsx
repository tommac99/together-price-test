import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { UserAvatar } from "../UserAvatar";
import { Box, Typography } from "@material-ui/core";
import { FilledIconButton } from "../FilledIconButton";
import { AccountBox } from "@material-ui/icons";

const data = {
  userId: 1234,
  fullName: "Gina Snelly",
  profileImageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
  trust: 75,
};

export const SearchContactCard = () => {
  const classes = useStyles();

  return (
    <Box width={362} height={122}>
      <Box className={classes.top}>
        <Box className={classes.userAvatar}>
          <UserAvatar
            fullName={data.fullName}
            url={data.profileImageUrl}
            trust={data.trust}
          />
        </Box>
        <Box className={classes.button}>
          <FilledIconButton />
        </Box>
        <Box className={classes.topTextBox}>
          <Typography variant="h1">{data.fullName}</Typography>
          <Box height={5} />
          <Typography variant="subtitle1" className={classes.subtitleGray}>
            nessuna connessione
          </Typography>
        </Box>
      </Box>
      <Box className={classes.bottom}>
        <Box display="flex">
          <Typography variant="h1" color="primary">
            Sta già condividendo
          </Typography>
          <Box width={4}></Box>
          <Typography variant="h1" color="primary" className={classes.bold}>
            Disney Plus
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 362,
    height: 122,
  },
  top: {
    position: "relative",
    width: 362,
    height: 81,
    background: theme.palette.background.default,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  userAvatar: {
    position: "absolute",
    bottom: 13,
    left: 2,
  },
  topTextBox: {
    marginLeft: 100,
    paddingTop: 13,
  },
  subtitleGray: {
    color: "#818181",
  },
  button: {
    position: "absolute",
    top: 18,
    right: 18,
  },
  bottom: {
    width: 362,
    height: 41,
    background: "#EAE8FE",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bold: {
    fontWeight: 600,
    textDecoration: "underline",
    cursor: "pointer",
  },
}));
