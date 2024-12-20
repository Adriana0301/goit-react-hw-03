import { Formik, Form, Field } from 'formik';
import s from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => (
  <Formik>
    <Form className={s.searchBoxWrapper}>
      <Field
      type="text"
      placeholder="Find contacts by name"
      value={value}
      onChange={onChange}
      className={s.searchBoxInput}/>
      </Form>
  </Formik>
);

export default SearchBox;
