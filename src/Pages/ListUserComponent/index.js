import React, {useEffect, useState} from 'react'
import ApiService from "../../Api/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import NavBar from "../../Components/Navbar";
import Container from "@material-ui/core/Container";
import './listusercomponent.module.css';

function ListUserComponent(props) {

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        reloadUserList();
    }, [])

    const reloadUserList = () => {
        ApiService.fetchUsers()
            .then((res) => {
                setUsers(res.data)
            });
    }

    const deleteUser = (userId) => {
        ApiService.deleteUser(userId)
            .then(() => {
                setMessage('User deleted successfully.')
                setUsers(users.filter(user => user.id !== userId))
            })
    }

    const editUser = (id) => {
        window.localStorage.setItem("userId", id);
        props.history.push('/edit-user');
    }

    const addUser = () => {
        window.localStorage.removeItem("userId");
        props.history.push('/add-user');
    }

    return (
        <div>
            <NavBar/>
            <Container>
                <Typography variant="h4">User Details</Typography>
                <Button variant="contained" color="primary" onClick={() => addUser()}>
                    Add User
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="right">FirstName</TableCell>
                            <TableCell align="right">LastName</TableCell>
                            <TableCell align="right">UserName</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right" name="firstname">{row.firstName}</TableCell>
                                <TableCell align="right" name="lastname">{row.lastName}</TableCell>
                                <TableCell align="right" name="username">{row.userName}</TableCell>
                                <TableCell align="right" name="age">{row.age}</TableCell>
                                <TableCell align="right" name="salary">{row.salary}</TableCell>
                                <TableCell align="right" name="edit"
                                           onClick={() => editUser(row.id)}><CreateIcon/></TableCell>
                                <TableCell align="right" name="delete"
                                           onClick={() => deleteUser(row.id)}><DeleteIcon/></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </div>
    );

}

export default ListUserComponent;