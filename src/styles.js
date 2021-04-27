import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: (props) => ({
    padding: theme.spacing(0, 0, 6),
  }),
  buttons: () => ({
    marginTop: "40px",
  }),
  cardGrid: () => ({
    marginTop: "40px",
  }),
  card: () => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
  }),
  cardContent: () => ({
    flexGrow: 1,
  }),
}));

export default styles;
