import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import logoImage from "./assets/logo.png";
import faviconImage from "./assets/favicon.ico";
import codingImage from "./assets/coding.jpg";

function App() {
  return (
    <div>
      <Helmet>
        <title>MANGA | Home</title>
        <link rel="icon" type="image/x-type" href={faviconImage} />
      </Helmet>
      <header className="sticky inset-0 flex justify-between items-center shadow-lg px-6 bg-white sm:justify-normal sm:px-8 lg:px-10">
        <a href="/">
          <img
            src={logoImage}
            alt="logo"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
          />
        </a>
        <NavBar />
      </header>
      <main>
        <img src={codingImage} alt="coding" />
      </main>
      <footer className="pt-6 px-3 pb-20 sm:pt-8 sm:px-6 sm:pb-24">
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
