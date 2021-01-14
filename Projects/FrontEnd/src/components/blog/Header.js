import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { Link as LinkRouter } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    flex: 4,
    alignItems: "flex-start",
    alignContent: "flex-start",
    color: "inherit",
    variant: "body2",
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const { title, sections, logState } = props
  const style = {
    textDecoration: "none",
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <LinkRouter to="/" style={style}>
          <Button size="small">Home</Button>
        </LinkRouter>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <LinkRouter to="/SingIn" style={style}>
          {logState && (
            <Button variant="outlined" size="small">
              Sign In
            </Button>
          )}
        </LinkRouter>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link noWrap key={section.title} className={classes.toolbarLink}>
            <LinkRouter to={section.url} style={style}>
              {section.title}
            </LinkRouter>
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
