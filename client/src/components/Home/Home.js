import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';

import BookService from '../../services/BookService';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await BookService.getBooks();
      if (!response) {
        throw new Error(response.error);
      }
      setBooks(response.data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  return (
    <div>
      <h1>Books Library</h1>
      {loading ? (
        <div>Loading.</div>
      ) : (
        <Grid className="books-container">
          <Grid.Row columns={3}>
            {books.map((item) => (
              <Grid.Column key={item.id}>
                <span>{item.title}</span>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      )}
    </div>
  );
};

export default Home;
