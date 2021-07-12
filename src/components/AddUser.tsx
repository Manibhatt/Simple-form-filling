import React, { useState, useEffect } from 'react';
import { IState as Props } from "../../UserInfo";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import { Button } from '@material-ui/core';


interface IProps {
    user: Props['user'],
    setUsers: Function
}

const AddUser: React.FC<IProps> = ({ user, setUsers }) => {
    const [value, setValue] = React.useState<Date | null>(null);
    const [formDetails, setDetails] = useState({
        firstName: "",
        lastName: "",
        age: "",
        date: ""
    })

    const inputValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({
            ...formDetails,
            [event.target.name]: event.target.value
        })
    }


    const inputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({
            ...formDetails,
            date: event.target.value
        })
    }

    const addUser = () => {
        if (formDetails.firstName.length > 0 &&
            formDetails.lastName.length > 0 &&
            formDetails.age.length > 0 &&
            formDetails.date.length > 0
        ) {
            setUsers([
                ...user,
                {
                    firstName: formDetails.firstName,
                    lastName: formDetails.lastName,
                    dateOfJoining: formDetails.date,
                    age: formDetails.age
                }
            ])
            setDetails({
                firstName: "",
                lastName: "",
                age: "",
                date: ""
            })
        }
    }

    return (
        <>
            <Typography
                variant="h5"
                align="center"
            >
                Add User
            </Typography>
            <form>
                <TextField
                    name="firstName"
                    label="First Name"
                    size="medium"
                    fullWidth={true}
                    margin="dense"
                    onChange={inputValues}
                    value={formDetails.firstName}
                />
                <TextField
                    name="lastName"
                    label="Last Name"
                    size="medium"
                    fullWidth={true}
                    margin="dense"
                    onChange={inputValues}
                    value={formDetails.lastName}
                />
                <TextField
                    name="age"
                    label="Age"
                    size="medium"
                    fullWidth={true}
                    margin="dense"
                    type="number"
                    onChange={inputValues}
                    value={formDetails.age}
                />
                <TextField
                    name="date"
                    value={formDetails.date}
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
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addUser}
                >
                    Add User
                </Button>
            </form>

        </>
    )
}
export default AddUser;
