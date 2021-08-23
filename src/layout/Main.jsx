import React from 'react';
import { Movielist } from '../components/Movielist';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&&apikey=${API_KEY}&s=batman`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ movies: data.Search, loading: false })
      )
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  searchMovies = (searchStr, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&&apikey=a16bf203&s=${
        searchStr ? searchStr : 'batman'
      }${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ movies: data.Search, loading: false })
      );
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movielist movies={movies} />}
      </main>
    );
  }
}

export { Main };
