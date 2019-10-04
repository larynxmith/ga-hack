import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

import axios from 'axios';
import BASE_URL from '../../constants';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));


const CharacterModal = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false)

    const [values, setValues] = React.useState({
        alignment: '',
        class: '',
        firstname: '',
        gender: '',
        backstory: '',
        lastname: '',
        personsOfInterest: '',
        race: ''
    });

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(false)
        let token = localStorage.getItem('authToken')

        console.log('values:: ', values)
        axios.post(`${BASE_URL}/characters`,
            {
                alignment: values.alignment,
                class: values.class,
                firstname: values.firstname,
                gender: values.gender,
                backstory: values.backstory,
                lastname: values.lastname,
                personsOfInterest: values.personsOfInterest,
                race: values.race
            },
            {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(response => {
                console.log('CHARACTER CREATED', response)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setValues(e.target.value)
    }

let classesList = props.classes ? props.classes.map((c, i) => {
    console.log('classesList: ', props.classes)
    return <MenuItem key={i} value={c.name}>{c.name}</MenuItem>
}) : ''

let racesList = props.races ? props.races.map((r, i) => {
    console.log('racesLIst: ', props.races)
    return <MenuItem key={i} value={r.name}>{r.name}</MenuItem>
}) : ''
console.log(racesList)
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Create a Character
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Character Creation Time!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Set all of your fields below; if you have a list of People to find, enter them separated by commas.
          </DialogContentText>
                    <form className={classes.root} autoComplete="off">
                        <TextField
                            id="filled-name"
                            label="Enter a First Name"
                            className={classes.textField}
                            value={values.firstname}
                            onChange={handleChange}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="filled-name"
                            label="Enter a Last Name"
                            className={classes.textField}
                            value={values.lastname}
                            onChange={handleChange}
                            margin="normal"
                            variant="filled"
                        />

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Gender</InputLabel>
                            <Select
                                value={values.gender}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'gender',
                                    id: 'age-auto-width',
                                }}

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </Select>

                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Race</InputLabel>
                            <Select
                                value={values.age}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'race',
                                    id: 'age-auto-width',
                                }}

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {racesList}
                            </Select>
                            {/*  */}
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Class</InputLabel>
                            <Select
                                value={values.age}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'class',
                                    id: 'age-auto-width',
                                }}

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                {classesList}
                                </MenuItem>
                            </Select>

                        </FormControl><FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Alignment</InputLabel>
                            <Select
                                value={values.alignment}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'alignment',
                                    id: 'age-auto-width',
                                }}

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Lawful Good</MenuItem>
                                <MenuItem value="lawful-neutral">Lawful Neutral</MenuItem>
                                <MenuItem value="lawful-evil">Lawful Evil</MenuItem>
                                <MenuItem value="neutal-good">Neutral Good</MenuItem>
                                <MenuItem value="neutral">Neutral</MenuItem>
                                <MenuItem value="neutral-evil">Neutral-Evil</MenuItem>
                                <MenuItem value="chaotic-good">Chaotic Good</MenuItem>
                                <MenuItem value="chaotic-neutral">Chaotic Neutral</MenuItem>
                                <MenuItem value="chaotic-evil">Chaotic Evil</MenuItem>
                            </Select>

                        </FormControl>
                        <TextField
                            id="standard-name"

                            value={values.personsOfInterest}
                            label="Enter any Persons of Interest"
                            multiline
                            onChange={handleChange}
                            rows="2"
                            className={classes.textField}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"

                            value={values.backstory}
                            label="Enter Your Back Story"
                            multiline
                            onChange={handleChange}
                            rows="4"
                            className={classes.textField}
                            margin="normal"
                        />
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Create Your Character
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default CharacterModal
