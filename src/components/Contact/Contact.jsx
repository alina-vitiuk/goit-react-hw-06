import { BsFillPersonFill } from "react-icons/bs";
import { HiPhone } from "react-icons/hi2";
import PropTypes from "prop-types";
import css from "./Contact.module.css";

const Contact = ({ data: { id, number, name }, onDelete }) => {
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
      <button className={css.buttonDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  onDelete: PropTypes.func,
};

export default Contact;
