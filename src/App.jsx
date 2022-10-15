import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-zinc-900">
      <div className="h-full flex flex-col justify-between ">
        <header className="md:px-10 lg:px-20">
          <Navbar />
        </header>
        <main className="md:px-10 lg:px-20">
          <Hero />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
