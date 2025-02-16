import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <p>
        <b>Find contacts by name</b>
      </p>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
