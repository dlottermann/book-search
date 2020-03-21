import React, { useMemo, useState, useCallback } from "react";
import { useStateValue } from "../store";
import { getBooks } from "../services/api";
import { normalizeBooks } from "../utils/index";
import { Loader, Navbar, Footer } from "./shared";
import Dashboard from "./Dashboard";

const App = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("''");
  const [state, dispatch] = useStateValue();
  

  const fetchBooks = useCallback(
    async (page,search) => {
      const response = await getBooks(page,search);
      setTotal(response.totalItems)
      return dispatch({
        type: "GET_BOOKS",
        payload: normalizeBooks(response)
      });
    },
    [dispatch]
  );

  useMemo(() => {
    fetchBooks(page,search);
  }, [page, search, fetchBooks]);


  const handleSearch = param =>{
      dispatch({ type: "LOADING", payload: true });
     const search = param.length > 0 ? param : "''";
      setSearch(search);
      setPage(0);
  }

  
  return (
    <div>
      <Navbar search={handleSearch} />
      {state.loading ? <Loader type={"bars"} /> : <Dashboard  total={total} />}
      <Footer setPage={setPage} page={page} />
    </div>
  );
};

export default App;
