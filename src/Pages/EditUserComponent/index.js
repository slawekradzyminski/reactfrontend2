import React, {useEffect, useState} from 'react'
import ApiService from "../../Api/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from "../../Components/Navbar";
import Container from "@material-ui/core/Container";
import './editusercomponent.module.css';

function EditUserComponent(props) {

    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [message, setMessage] = useState(null);

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = () => {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data;
                setId(user.id);
                setFirstName(user.firstName)
                setLastName(user.lastName)
                setUserName(user.userName)
                setAge(user.age)
                setSalary(user.salary)
            });
    }

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

    const saveUser = (e) => {
        e.preventDefault();
        let user = {
            id, firstName, lastName, userName, age, salary
        };
        ApiService.editUser(user)
            .then(() => {
                setMessage('User edited successfully.');
                props.history.push('/users');
            });
    };

    return (
        <div>
            <NavBar/>
            <Container>
                <Typography variant="h4">Edit User</Typography>
                <form>
                    <TextField type="text" placeholder="userName" fullWidth margin="normal" name="userName"
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
            </Container>
        </div>
    );
}

export default EditUserComponent;