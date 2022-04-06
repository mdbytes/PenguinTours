import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="App">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
