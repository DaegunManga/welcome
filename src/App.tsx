import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <header className="sticky inset-0 flex justify-between items-center shadow-lg px-6 bg-white sm:justify-normal sm:px-8 lg:px-10">
        <a href="/">
          <img
            src="logo.png"
            alt="logo"
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
          />
        </a>
        <NavBar />
      </header>
      <main>
        <img src="coding.jpg" alt="coding" />
      </main>
      <footer>
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
