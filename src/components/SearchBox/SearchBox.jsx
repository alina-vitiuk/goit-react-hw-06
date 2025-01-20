import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.container}>
      <p className={css.inputText}>Find contacts by name</p>
      <div className={css.container}>
        <input
          className={css.formInput}
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};

export default SearchBox;
