import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import { Container, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    flex: 4,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    color: 'inherit',
    variant: 'body2',
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const { title, sections, logState } = props
  const style = {
    textDecoration: 'none',
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Container>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={2}>
              <LinkRouter to="/" style={style}>
                <Button color="primary" size="large" variant="outlined" fullWidth>
                  Home
                </Button>
              </LinkRouter>
            </Grid>
            <Grid item xs={8} >
              <Typography align="center" justify="center" variant="h5">
                <img
                  src="/logo192.png"
                  alt="ips-marker"
                  style={{ width: 64 }}
                />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <LinkRouter to="/SingIn" style={style}>
                {logState && (
                  <Button color="primary" size="large" variant="outlined" fullWidth>
                    Sign In
                  </Button>
                )}
              </LinkRouter>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbar}>
        <Container>
          <Grid container direction="row" justify="center" alignItems="center" spacing={10}>
            {sections.map((section) => (
              <Grid item xs={4} sm={3}>
                <LinkRouter to={section.url} style={style}>
                  <Button variant="outlined" color="secondary" size="medium" fullWidth>
                    {section.title}
                  </Button>
                </LinkRouter>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
