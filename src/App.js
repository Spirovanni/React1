import React from "react";
import './App.css';

function Header(props) {
    console.log(props);
    return (
      <header>
        <h1>{props.name}'s Kitchen</h1>
      </header>
  );
}

function Main() {
    return (
        <section>
            <p>We serve the most delicious food around.</p>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <p>It's true.</p>
        </footer>
    );
}

function App() {
  return (
    <div className="App">
        <Header name="Cindy" />
        <Main />
        <Footer />
      <h3>Footer</h3>
    </div>
  );
}

export default App;
