import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

import { useHistory } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import SearchForm from "../components/SearchForm";

import bookActions from "../redux/actions/books.actions";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;


// 1. Read through someone elses code and understand it
// 2. Refactor to use Redux for state.
// 3. Structure application in a scalable way.
// 4. Refactor to use Redux Thunk so that we can sequester our logic related to the composition of an API request out of our component/error handling.

const HomePage = () => {
  // const [books, setBooks] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const totalPage = 10;
  const limit = 10;

  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleClickBook = (bookId) => {
    history.push(`/books/${bookId}`);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookActions.getBooks(pageNum, limit, query));
  }, [dispatch, pageNum, limit, query]);

  // const books = useSelector((state) => state.books.books);
  // const {books} = useSelector((state) => state.books);

  const {
    books: { books },
  } = useSelector((state) => state);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">Book Store</h1>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <SearchForm
            loading={loading}
            searchInput={searchInput}
            handleSearchChange={handleSearchInputChange}
            handleSubmit={handleSubmit}
          />
          <hr />
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={totalPage}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {loading ? (
            <div className="text-center">
              <ClipLoader color="#f86c6b" size={150} loading={true} />
            </div>
          ) : (
            <ul className="list-unstyled d-flex flex-wrap justify-content-between">
              {books.map((book) => (
                <li key={book.id} onClick={() => handleClickBook(book.id)}>
                  <Card
                    style={{
                      width: "12rem",
                      height: "27rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`${BACKEND_API}/${book.imageLink}`}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>@{book.author}</Card.Text>
                    </Card.Body>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
