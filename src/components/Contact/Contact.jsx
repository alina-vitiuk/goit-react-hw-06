// import { BsPhone, BsPerson, BsTrash } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { HiPhone } from "react-icons/hi2";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ data: { id, number, name } }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.containerContac}>
      <div className={css.thumbContact}>
        <h2 className={css.nameContact}>
          <BsFillPersonFill size="22" />
          {name}
        </h2>
        <p className={css.numberContact}>
          <HiPhone size="22" />
          {number}
        </p>
      </div>
      <button className={css.buttonDelete} onClick={handleDeleteItem}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
