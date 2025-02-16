import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../redux/contactsSlice";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { ThreeDots } from "react-loader-spinner";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="custom-dark-blue">
        Phone
        <b>Book</b>
      </h1>

      <ContactForm />
      <SearchBox />
      {loading && (
        <div className="loading">
          <ThreeDots
            color="#00BFFF"
            height="80"
            width="80"
            radius="9"
            ariaLabel="three-dots-loader"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {error && <p className="errorMessage">Error: {error}</p>}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
