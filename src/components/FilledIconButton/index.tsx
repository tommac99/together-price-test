import { FC } from "react";
import { Button, makeStyles, Theme } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export const FilledIconButton: FC = () => {
  const classes = useStyles();

  return (
    <Button variant="outlined" color="primary" className={classes.button}>
      <AddIcon />
    </Button>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: 47,
    height: 45,
    borderRadius: 8,
    padding: 0,
    minWidth: 0,
    background: "#EAE8FE",
  },
}));
