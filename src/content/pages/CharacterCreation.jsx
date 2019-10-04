
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
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
}));

function CharacterCreation() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
        alignment: '',
        class: '',
        gender: '',
        name: 'hai',
        race: ''
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    const handleChange = event => {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <form className={classes.root} autoComplete="off">

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-auto-width">Gender</InputLabel>
                <Select
                    value={values.gender}
                    onChange={handleChange}
                    inputProps={{
                        name: 'gender',
                        id: 'age-auto-width',
                    }}
                    autoWidth
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                </Select>
                <FormHelperText>Auto width</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-auto-width">Race</InputLabel>
                <Select
                    value={values.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'race',
                        id: 'age-auto-width',
                    }}
                    autoWidth
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Auto width</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-auto-width">Class</InputLabel>
                <Select
                    value={values.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'class',
                        id: 'age-auto-width',
                    }}
                    autoWidth
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={11}>Eleven</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Auto width</FormHelperText>
            </FormControl><FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-auto-width">Alignment</InputLabel>
                <Select
                    value={values.alignment}
                    onChange={handleChange}
                    inputProps={{
                        name: 'alignment',
                        id: 'age-auto-width',
                    }}
                    autoWidth
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
                <FormHelperText>Auto width</FormHelperText>
            </FormControl>
            


        </form>
    );
}

export default CharacterCreation