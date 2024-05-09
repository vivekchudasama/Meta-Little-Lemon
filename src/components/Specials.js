import Card from "./Card";
import { Link } from "react-router-dom";
import Menu from "./icons_assets/menu.png";
import specials from "./Item";

export default function Specials() {
  return (
    <section className="specials mt-3" id="specials">
      <h2 className="text-right text-uppercase mt-5">Weekly specials</h2>
      <a href={Menu} target="_blank" rel="noopener noreferrer">
        <button className="btn-menu">Menu online</button>
      </a>
      <div className="grid grid-3-columns">
        {specials.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            url={p.url}
            title={p.title}
            price={p.price}
            desc={p.desc}
          />
        ))}
      </div>
    </section>
  );
}
