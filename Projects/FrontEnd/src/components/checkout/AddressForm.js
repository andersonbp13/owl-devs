import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Data
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <InputLabel id="demo-simple-select-label">ID Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="idType"
            name="idType"
            value={0}
            // onChange=
            displayEmpty
            // className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
            fullWidth
          >
            <MenuItem value={0}>CC</MenuItem>
            <MenuItem value={1}>NIT</MenuItem>
            <MenuItem value={2}>Other</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={10}>
          <TextField
            required
            id="idNumber"
            name="idNumber"
            label="ID Number"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  )
}
