import './header.css';
import { BsPencilSquare } from "react-icons/bs";

function LivyHeader({ updateText }) {
  const changeText = (e) => {
    updateText(e.target.value);
  };
  return (
    <div className="livy-font-header">
      <div className="livy-font-header-container">
        <h1>Livy Gift Shop</h1>
        <div className="input-field">
          <BsPencilSquare />
          <input placeholder="Type Something" onChange={changeText} />
        </div>
      </div>
    </div>
  );
}

export default LivyHeader;
