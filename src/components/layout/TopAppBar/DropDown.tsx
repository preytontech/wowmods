import {
  Button,
  createStyles,
  FormControl,
  InputBase,
  makeStyles,
  MenuItem,
  Select,
  Theme,
  withStyles,
} from "@material-ui/core";
import React from "react";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 5,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      width: "14em",
      "&:hover": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  lookup: {
    marginLeft: 50,
  },
}));
interface Props {
  loading: boolean;
  dirList: Array<object>;
  error: string;
  handleAddDir: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectInput: string;
}
const dropDownRender = (
  { loading, dirList, error, handleAddDir }: Props,
  classes
) => {
  if (loading)
    return (
      <MenuItem disabled value={1}>
        Searcing...
      </MenuItem>
    );
  if (error) return <MenuItem value={1}>{error}</MenuItem>; //error markup

  return dirList.map((rec: any, i) => {
    return (
      <MenuItem key={i} value={i + 1}>
        {`${rec.name} - ${rec.path}`}
      </MenuItem>
    );
  });
};

const DropDown = (Props) => {
  const { error, handleSelectChange, selectValue } = Props;
  const classes = useStyles();
  return (
    <FormControl
      style={{ flexDirection: "unset", paddingRight: "2.5em" }}
      className={(classes.margin, "menubar-btn")}
    >
      <Select
        disabled={error ? true : false}
        onChange={handleSelectChange}
        value={selectValue}
        input={<BootstrapInput />}
      >
        {dropDownRender(Props, classes)}
      </Select>
    </FormControl>
  );
};

export default DropDown;
