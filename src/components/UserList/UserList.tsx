import React, { useState } from "react";
import { IState as Props } from "../../UserInfo";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal"
import EditUser from "../EditUser/EditUser"

interface IProps {
    user: Props['user'],
    setUsers: Function
}

const UserList: React.FC<IProps> = ({ user, setUsers }) => {

    const [modalOpen, setModal] = useState(false)
    const [userIndex, setUserIndex] = useState(0);

    const openModal = (index: number) => {
        setUserIndex(index)
        setModal(true);
    }

    const deleteRecord = (index: number) => {
        const sampleArray = [...user.map((tempUser) => {
            return {
                ...tempUser
            }
        })];
        sampleArray.splice(index, 1);
        setUsers(sampleArray);
    }


    const closeModal = () => { }

    const tableBody = () => {
        const userRecord = user.map((tempUser, index) => {
            const { firstName, lastName, age, dateOfJoining } = tempUser;
            return (
                <TableRow key={age}>
                    <TableCell>{firstName}</TableCell>
                    <TableCell>{lastName}</TableCell>
                    <TableCell>{age}</TableCell>
                    <TableCell>{dateOfJoining}</TableCell>
                    <TableCell>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => { openModal(index) }}
                        >
                            Edit
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => { deleteRecord(index); }}
                        >
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>)
        })
        return (<TableBody>
            {userRecord}
        </TableBody>);
    }

    const table = () => (
        (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6">
                                    First Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">
                                    Last Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">
                                    Age
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">
                                    Date of Joining
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">
                                    Edit
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">
                                    Delete
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {tableBody()}
                </Table>
            </TableContainer>
        )
    )


    return (<>
        <Typography align="center" variant="h5">
            Users
        </Typography>
        {table()}
        <Modal
            open={modalOpen}
            onClose={closeModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            disableEnforceFocus
        >
            <>
                <EditUser
                    user={user}
                    setUser={setUsers}
                    userIndex={userIndex}
                    setModal={setModal}
                />
            </>
        </Modal>
    </>);
}
export default UserList;
