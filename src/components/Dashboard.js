import React from "react";
import { useStateValue } from "../store";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";

import { normalizeDate, normalizeISBN } from '../utils'

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
    maxWidth: "95%",
    marginTop: 0,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto"
  },
  container: {
    paddingBottom: 9
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3)
  },
  MuiBackdrop: {
    backgroundColor: "#red"
  }
}));




const Dashboard = ({ total }) => {
  const [state] = useStateValue();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense caption table"
        >
          <caption>Total de registros {total}</caption>
          <TableHead>
            <TableRow>
              <TableCell>Livro</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Editora</TableCell>
              <TableCell align="right">Ano</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.books.length > 0 ? (
              state.books.map((book,index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {book.title} - {book.subtitle}
                    <br />
                    {normalizeISBN(book.isbn)}
                  </TableCell>
                  <TableCell align="right">{book.author}</TableCell>
                  <TableCell align="right">{book.publisher}</TableCell>
                  <TableCell align="right">
                    {normalizeDate(book.publishedDate)}
                  </TableCell>
                  <TableCell align="right">
                    <Link to={`detail/${book.id}`} >
                      Detalhes
                    </Link>
                    {/* Modal book */}
                   
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell component="th" scope="row">
                  Nenhum registro encontrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
