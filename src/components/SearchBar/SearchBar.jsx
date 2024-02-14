import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      alert('Please enter something!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchQuery"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit" className={css.submit}>
        <FcSearch size={50} />
      </button>
    </form>
  );
};
