import React from 'react'
import {Button, Table, TableHead, TableBody, TableRow, TableCell, Container} from "@mui/material"
import DeleteMenu from './DeleteMenu'

const Import = (props) => {
    console.log(props);
    return (
        <Container maxWidth="md">
            <Button onClick={props.fetchMakes} varient='contained'>
                Import
            </Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make/Model</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.makes.map((car, idx) => (
                    <TableRow key={car.MakeId}>
                        <TableCell component="th" scope="row">{car.MakeId}</TableCell>
                        <TableCell>{car.MakeName}</TableCell>
                        <TableCell><DeleteMenu deleteMake={props.deleteMake} index={idx}/></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import;