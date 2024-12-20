import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoPersonSharp } from 'react-icons/io5';
import s from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={s.contact}>
      <div className={s.contactContainer}>
        <div className={s.contactWrapper}>
          <BsFillTelephoneFill color="#007bhf" />
          <p className={s.contactText}>{contact.name}</p>
        </div>
        <div className={s.contactWrapper}>
          <IoPersonSharp color="#007bhf" />
          <p className={s.contactText}> {contact.number}</p>
        </div>
      </div>
      <button className={s.contactBtn} type="button" onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;