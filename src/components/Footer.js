import { Navbar } from "react-bootstrap";

const Footer = () => {
   return (
    <footer
      className="bg-dark text-light text-center py-1"
      style={{
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        marginTop: "20px",
      }}
    >
      <Navbar className="justify-content-center bg-dark">
        <p className="mb-0">
          © {new Date().getFullYear()} MyLittleCinema. All rights reserved.
        </p>
      </Navbar>
    </footer>
  );
};

export default Footer;
