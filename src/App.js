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

function Main(props) {
    return (
        <section>
            <p>We serve the most {props.adjective} food around.</p>
            <ul style={{textAlign: "left"}}>
                {props.dishes.map((dish, i) => (
                    <li key={i}>{dish}</li>
                ))}
            </ul>
        </section>
    );
}

function Footer(props) {
    return (
        <footer>
            <p>Copyright {props.year}</p>
        </footer>
    );
}

const dishes = [
    "Macaroni and Cheese",
    "Salmon",
    "Tofu with Vegetables",
    "Minestrone"
]

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);

function App() {
  return (
    <div className="App">
        <Header name="Horacio" />
        <Main adjective="amazing" dishes={dishes}/>
        <Footer year={new Date().getFullYear()} />
      <h3>Footer</h3>
    </div>
  );
}

export default App;
