import React, {useState} from 'react'
import ApiService from "../Api/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function AddUserComponent(props) {

    const [id] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [message, setMessage] = useState(null);

    const saveUser = (e) => {
        e.preventDefault();
        let user = {
            id, firstName, lastName, userName, age, salary
        };
        ApiService.addUser(user)
            .then(() => {
                setMessage('User added successfully.');
                props.history.push('/users');
            });
    };

    const saveFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const saveLastName = (event) => {
        setLastName(event.target.value)
    }

    const saveUserName = (event) => {
        setUserName(event.target.value)
    }

    const saveAge = (event) => {
        setAge(event.target.value)
    }

    const saveSalary = (event) => {
        setSalary(event.target.value)
    }

    return (
        <div>
            <Typography variant="h4" style={style}>Add User</Typography>
            <form style={formContainer}>

                <TextField type="text" placeholder="username" fullWidth margin="normal" name="userName"
                           value={userName} onChange={saveUserName}/>

                <TextField placeholder="First Name" fullWidth margin="normal" name="firstName"
                           value={firstName} onChange={saveFirstName}/>

                <TextField placeholder="Last name" fullWidth margin="normal" name="lastName"
                           value={lastName} onChange={saveLastName}/>

                <TextField type="number" placeholder="age" fullWidth margin="normal" name="age"
                           value={age} onChange={saveAge}/>

                <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary"
                           value={salary} onChange={saveSalary}/>

                <Button variant="contained" color="primary" onClick={saveUser}>Save</Button>
            </form>
        </div>
    );
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style = {
    display: 'flex',
    justifyContent: 'center'

};

export default AddUserComponent;