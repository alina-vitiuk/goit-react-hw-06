import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
// import { initialStateFilter } from "../../redux/contactsSlice";

const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handelInputSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  // const cleanInput = () => {
  //   dispatch(changeFilter(initialStateFilter.name));
  // };

  return (
    <div className={css.container}>
      <p className={css.inputText}>Find contacts by name</p>
      <div className={css.container}>
        <input
          className={css.formInput}
          type="text"
          value={searchValue}
          onChange={handelInputSearch}
        />
      </div>
    </div>
  );
};

export default SearchBox;
