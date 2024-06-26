import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contact/contactsOps";
export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
