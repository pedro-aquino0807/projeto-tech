import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";

const categorias = { Camisetas: "👕", Calças: "👖", Tênis: "👟", Acessórios: "🎧" };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="hero__tag">Melhores ofertas personalizadas</p>
            <h1>Queima de estoque Nike 🔥</h1>
            <p>Tênis, roupas e acessórios com descontos por tempo limitado.</p>
            <Link to="/produtos" className="btn btn--lg">Ver ofertas</Link>
          </div>
          <div className="hero__img" aria-hidden="true">👟</div>
        </div>
      </section>

      <section className="container section">
        <h2>Coleções em destaque</h2>
        <div className="grid grid--3">
          {["Novo drop Supreme", "Coleção Adidas", "Novo Beats Bass"].map((t, i) => (
            <div key={t} className="collection" style={{ background: ["#FFE8F2", "#E2E3FF", "#E2FAFF"][i] }}>
              <span className="badge">30% OFF</span>
              <h3>{t}</h3>
              <Link to="/produtos" className="btn">Comprar</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Categorias</h2>
        <div className="icons">
          {Object.entries(categorias).map(([c, emoji]) => (
            <a key={c} href={`/produtos?cat=${c}`} className="icon">
              <span>{emoji}</span>{c}
            </a>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2>Produtos em alta</h2>
          <Link to="/produtos" className="link">Ver todos</Link>
        </div>
        <div className="grid grid--4">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
