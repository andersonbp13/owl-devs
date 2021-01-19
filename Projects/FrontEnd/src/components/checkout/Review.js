import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'

const data = [
  { dataType: 'ID Type', dataValue: 'CC' },
  { dataType: 'First Name', dataValue: 'Anon' },
  { dataType: 'Last Name', dataValue: 'Anon' },
  { dataType: 'Address', dataValue: 'NA' },
  { dataType: 'Email', dataValue: 'NA' },
  { dataType: 'Phone Number', dataValue: 'NA' },
]
const addresses = [
  '1 Material-UI Drive',
  'Reactville',
  'Anytown',
  '99999',
  'USA',
]
const ipsData = [
  { name: 'Region', detail: 'Antioquia' },
  { name: 'City', detail: 'Medellin' },
  { name: 'Address', detail: 'Diagonal 32D #54-32' },
  { name: 'Phone Number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Appointment Dat', detail: '02/04/2024' },
]

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}))

export default function Review() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Appointment Summary
      </Typography>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Personal Details
      </Typography>
      <List disablePadding>
        {data.map((data) => (
          <ListItem className={data.listItem} key={data.dataType}>
            <ListItemText primary={data.dataType} secondary={''} />
            <Typography variant="body2">{data.dataValue}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            IPS Details
          </Typography>
          <Grid container>
            {ipsData.map((data) => (
              <React.Fragment key={data.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{data.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{data.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
