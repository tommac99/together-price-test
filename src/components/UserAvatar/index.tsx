import { FC } from "react";
import { Avatar, Typography, CircularProgress } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

type UserAvatarPropsType = {
  url: string;
  fullName: string;
  trust: number;
};

export const UserAvatar: FC<UserAvatarPropsType> = ({
  url,
  trust,
  fullName,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.trust}>
        <Typography variant="body1">{trust}</Typography>
      </div>
      <Avatar alt={fullName} src={url} className={classes.avatar} />
      <CircularProgress
        variant="determinate"
        value={trust}
        className={classes.circle}
        size={89}
      />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    width: 89,
    height: 89,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  trust: {
    position: "absolute",
    zIndex: 1,
    top: -10,
    left: "50%",
    transform: "translate(-50%,0)",
    width: 28,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "50%",
  },
  avatar: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 76,
    height: 76,
  },
  circle: {
    "& svg": {
      fill: "red",
    },
  },
}));
