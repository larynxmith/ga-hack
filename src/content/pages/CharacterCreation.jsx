
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

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

function CharacterCreation() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
        alignment: '',
        class: '',
        gender: '',
        mission_statement: '',
        name: '',
        race: ''
    });

    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    const handleNameChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleChange = event => {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <form className={classes.root} autoComplete="off">
            <TextField
                id="filled-name"
                label="Name"
                className={classes.textField}
                value={values.name}
                onChange={handleNameChange('name')}
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                    </MenuItem>
                    <MenuItem value={11}>Eleven</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                id="filled-multiline-static"
                value={values.mission_statement}
                label="Mission Statement"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="filled"
            />
        </form>
    );
}

export default CharacterCreation