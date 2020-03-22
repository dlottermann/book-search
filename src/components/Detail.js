import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../store";
import "./shared/main.css";
import { normalizeDate, normalizeISBN, normalizeBook } from "../utils";
import { Link } from "react-router-dom";
import { getBook } from "../services/api";
import { Loader } from "./shared";
import { withRouter, useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    minWidth: 650,
    maxWidth: "95%",
    marginTop: "3%",
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto"
  },
  thumb:{
    paddingRight: 28,
    width:185
  }
}));

const Detail = ({ match }) => {
  const [state, dispatch] = useStateValue();
  const [book, setBook] = useState(null);
  const classes = useStyles();
  const { id } = useParams();

  const fetchBook = useCallback(
    async id => {
      dispatch({
        type: "LOADING",
        payload: true
      });
      const response = await getBook(id);
      setBook(normalizeBook(response));
      return dispatch({
        type: "LOADING",
        payload: false
      });
    },
    [dispatch]
  );

  useEffect(() => {
    fetchBook(id);
  }, [id, fetchBook]);

  return (
    <div className={classes.container}>
      {(book === null || state.loading) ? (
        <Loader type={"bars"} />
      ) : (
        <div className="book-container">
          
          <img src={book.thumb} alt='' className={classes.thumb} />

          <div className="book-detail">
            <h1>
              {book.title}-{book.subtitle}
            </h1>
            <small>ISBN:{normalizeISBN(book.isbn)}</small>
            <br />
            <p>Autor(es):{book.author}</p>
            <span>
              <b>Editora:</b> {book.publisher}
            </span>
            <br />
            <span>Ano:{normalizeDate(book.publishDate)}</span>
            <br />
            <span>Idioma: {book.lang}</span>
            <br />
            <span>Peso: {book.weight}g</span>
            <br />
            <span>
              Dimensões:
              {`${book.dimensions[0]} X ${book.dimensions[1]} X ${book.dimensions[2]} cm`}{" "}
            </span>
          </div>
        </div>
      )}
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default withRouter(Detail);
