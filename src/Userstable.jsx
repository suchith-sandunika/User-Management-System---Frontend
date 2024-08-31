import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Userstable = ({ rows, selectedUser, deleteUser }) => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                width: 'calc(100% - 150px)'
            }}
        >
            <Table sx={{width: 'calc(100% - 150px)', height: ''}}>
                <TableHead sx={{height:'100%'}}>
                    <TableRow sx={{ backgroundColor: '#00c6e6' }}>
                        <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>ID</TableCell>
                        <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Name</TableCell>
                        <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#f9f9f9' }}>
                            <TableCell component="th" scope="row" sx={{ color: '#333333' }}>{row.id}</TableCell>
                            <TableCell sx={{ color: '#333333' }}>{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{
                                        margin: '0px 10px',
                                        backgroundColor: '#00c6e6',
                                        color: '#ffffff',
                                        padding: '5px 15px',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        '&:hover': {
                                            backgroundColor: '#00a5c6',
                                        },
                                    }}
                                    onClick={() => selectedUser({ id: row.id, name: row.name })}
                                >
                                    Edit
                                </Button>
                                <Button
                                    sx={{
                                        margin: '0px 10px',
                                        backgroundColor: '#e60000',
                                        color: '#ffffff',
                                        padding: '5px 15px',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        '&:hover': {
                                            backgroundColor: '#cc0000',
                                        },
                                    }}
                                    onClick={() => deleteUser({ id: row.id })}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#f9f9f9' }}>
                            <TableCell component="th" scope="row" colSpan={3} sx={{ textAlign: 'center', color: '#666666' }}>
                                No users
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Userstable;


// import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
//
// const Userstable = ({rows, selectedUser, DeleteUser}) => {
//     return (
//         <TableContainer component={Paper}>
//             <Table>
//                 <TableHead>
//                    <TableRow>
//                        <TableCell>
//                            ID
//                        </TableCell>
//                        <TableCell>
//                            Name
//                        </TableCell>
//                        <TableCell>
//                            Actions
//                        </TableCell>
//                    </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {
//                         rows.length > 0 ? rows.map(row => (
//                         <TableRow key={row.id} sx={{'&:last=child td, &:last=child th' : {border: 0}}}>
//                             <TableCell component='th' scope="row">
//                                 {row.id}
//                             </TableCell>
//                             <TableCell component='th' scope="row">
//                                 {row.name}
//                             </TableCell>
//                             <TableCell component='th' scope="row">
//                                 <Button sx={{margin:'0px 10px'}} onClick={() => {selectedUser({id: row.id, name: row.name})}}>Edit</Button>
//                                 <Button sx={{margin:'0px 10px'}} onClick={() => {DeleteUser({id: row.id})}}>Delete</Button>
//                             </TableCell>
//                         </TableRow>
//                         )) : (
//                             <TableRow sx={{'&:last=child td, &:last=child th' : {border: 0}}}>
//                                 <TableCell component='th' scope="row">
//                                     No users
//                                 </TableCell>
//                             </TableRow>
//                         )
//                     }
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     )
// }
//
// export default Userstable;