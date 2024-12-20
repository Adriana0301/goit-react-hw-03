import Contact from "./Contact/Contact";
import s from './ContactList.module.css'
const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.contactList}>
      <li className={s.contactListItem}>{contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDeleteContact} />
      ))}</li>
    </ul>
  );
  
  export default ContactList;