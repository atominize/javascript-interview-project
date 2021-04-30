import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: (props) => ({
    padding: theme.spacing(0, 0, 6),
  }),
  buttons: () => ({
    marginTop: "20px",
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
  textField: () => ({
    marginTop: "20px",
  }),
  backdrop: () => ({
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  }),
}));

export default styles;
