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

const useStyles = makeStyles({
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
  }
});

const normalizeISBN = isbn => {
  if (isbn) {
    if (!Array.isArray(isbn)) return null;
    let num = isbn.filter(i => i.type === "ISBN_13");
    return num.length > 0 ? `(${num[0].identifier})` : "-";
  }
};

const normalizeDate = date => {
  if (date) {
    if (date.includes("-")) {
      const year = date.split("-");
      return year[0];
    } else {
      return date;
    }
  }
};

const Dashboard = () => {
  const [state] = useStateValue();

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
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
              state.books.map((book, index) => (
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
                  <TableCell align="right">Detalhes</TableCell>
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
