import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classNames from "classnames";
import './_cus_select.css';

const styles = theme => ({
  value: {
      paddingLeft: 25,
      color: '#828282',
      fontSize: 15
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    // margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  label: {
      marginLeft: 30
  },
  focused: {
  },
  disabled: {},
  error: {},
});
const iconStyles = {
  selectIcon: {
    color: "#03a1fc",
    fill: '#03a1fc',
    left: 0
  }
};
const CustomExpandMore = withStyles(iconStyles)(
  ({ className, classes, ...rest }) => {
    return (
      <ExpandMoreIcon
        {...rest}
        className={classNames(className, classes.selectIcon)}
      />
    );
  }
);

class CusSelect extends React.Component {

  state = {
    index: 0,
    name: "hai"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          {this.props.label && <InputLabel className={classes.label} htmlFor="age-simple">{this.props.labelText}</InputLabel>}
          <Select
            className={classes.value}
            disableUnderline={true}
            value={this.state.index}
            onChange={this.handleChange}
            inputProps={{
              name: "index",
              id: "age-simple"
            }}
            IconComponent={CustomExpandMore}
          >
            {
                this.props.items.map((item, index) => (
                    <MenuItem value={index}>{item.value}</MenuItem>
                ))
            }
          </Select>
        </FormControl>
      </form>
    );
  }
}

CusSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CusSelect);