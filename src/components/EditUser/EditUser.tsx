import React, { useState, useEffect } from 'react';
import { IState as Props } from "../../UserInfo";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import useStyles from "../../styles";
import { Button } from '@material-ui/core';


interface IProps {
    user: Props['user'],
    setUser: Function,
    userIndex: number,
    setModal: Function
}


const EditUser: React.FC<IProps> = ({
    user,
    setUser,
    userIndex,
    setModal }) => {

    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        age: '',
        dateOfJoining: ''
    })

    useEffect(() => {
        let tempUser = { ...user[userIndex] }
        console.log(tempUser)
        setUserInfo({
            firstName: tempUser.firstName,
            lastName: tempUser.lastName,
            age: tempUser.age.toString(),
            dateOfJoining: tempUser.dateOfJoining
        });
    }, [])

    const inputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        })
    }

    const inputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            dateOfJoining: event.target.value
        })
    }

    const updateInformation = () => {
        if (userInfo.firstName.length > 0 &&
            userInfo.lastName.length > 0 &&
            userInfo.age.length > 0 &&
            userInfo.dateOfJoining.length > 0
        ) {
            let sampleUser = [...user];
            let particularUser = {
                ...sampleUser[userIndex],
                ...userInfo,
                age: parseInt(userInfo.age)
            };
            sampleUser[userIndex] = particularUser;
            setUser(sampleUser)
            setModal(false)
        }
    }

    return (
        <Box m="auto" className={classes.paper}>
            <Typography variant="h5" align="center">Edit User</Typography>
            <form>
                <TextField
                    name="firstName"
                    label="First Name"
                    size="medium"
                    fullWidth={true}
                    margin="dense"
                    onChange={inputValues}
                    value={userInfo.firstName}
                />
                <TextField
                    name="lastName"
                    label="Last Name"
                    size="medium"
                    fullWidth={true}
                    margin="dense"
                    onChange={inputValues}
                    value={userInfo.lastName}
                />
                <TextField
                    name="age"
                    label="Age"
                    size="medium"
                    fullWidth={true}
                    margin="dense"
                    onChange={inputValues}
                    value={userInfo.age}
                />
                <TextField
                    name="dateOfJoining"
                    value={userInfo.dateOfJoining}
                    size="medium"
                    label="Date Of Joining"
                    type="date"
                    fullWidth={true}
                    margin="dense"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={inputDate}
                />
            </form>

            <Button
                variant="contained"
                color="primary"
                onClick={updateInformation}
            >
                Update
            </Button>
        </Box>
    );
}
export default EditUser;
