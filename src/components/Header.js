import { Navbar, Nav} from "react-bootstrap";
import Filter from "./Filter";

const Header = ({ firstname, onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const rating = parseFloat(e.target[1].value) || 0;

    onSearch(title, rating);
  };

  return (
    <Navbar bg="dark" variant="dark" className="shadow-sm px-4 py-2">
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Accueil</Nav.Link>
        </Nav>

        <Filter onSearch={handleSearch} />

        <div className="d-flex align-items-center ms-3">
          <p className="text-white mb-0 me-3">{firstname || "Guest"}</p>
          <img
            src={
              firstname
                ? "/img/avatar.png"
                : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="avatar"
            width="50"
            height="50"
            className="rounded-circle border border-light"
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
