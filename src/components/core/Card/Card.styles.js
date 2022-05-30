import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    minWidth: "45%",
    margin: 50,
  },
  cardContent: {
    display: { sm: "flex" },
  },
  cardMedia: {
    width: { sm: 200, md: 300 },
    borderRadius: 1,
  },
  textRoot: {
    pl: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
