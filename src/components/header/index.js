import { useNavigate } from 'react-router-dom';
import "./styles.css";
export const Header = () => {
  const navigate = useNavigate();
  const handleRoute = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="container">
        <div className="main">
          <div>
            <h1>Rapid Xchange</h1>
          </div>
          <div className="header-btns">
            <div>
              <button
                onClick={() => {
                  handleRoute("/");
                }}
                className="btn "
              >
                Converter
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  handleRoute("/exchange");
                }}
                className="btn "
              >
                Exchange
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
