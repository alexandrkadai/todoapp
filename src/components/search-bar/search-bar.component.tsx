import { ChangeEventHandler } from 'react';
import './search-bar.style.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ onSearchChange, placeholder, className }: SearchBoxProps) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  </div>
);

export default SearchBox;
