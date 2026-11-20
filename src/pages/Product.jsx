import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products, brl } from "../data/products.js";

const tamanhos = [39, 40, 41, 42, 43];
const cores = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];

export default function Product() {
  const { id } = useParams();
  const p = products.find((x) => x.id === Number(id));
  const [tam, setTam] = useState(null);
  const [cor, setCor] = useState(cores[0]);
  const [ok, setOk] = useState(false);

  if (!p) return <div className="container section"><p>Produto não encontrado. <Link to="/produtos" className="link">Voltar aos produtos</Link></p></div>;

  return (
    <div className="container section">
      <p className="crumbs">Home / Produtos / {p.category} / {p.name}</p>
      <div className="detail">
        <div className="detail__img" style={{ background: p.color }} aria-hidden="true">👟</div>
        <div>
          <h1>{p.name}</h1>
          <small>{p.brand} | REF:38416711</small>
          <p className="price"><s>{brl(p.oldPrice)}</s> <strong>{brl(p.price)}</strong></p>
          <p>{p.description}</p>

          <h4>Tamanho</h4>
          <div className="chips">
            {tamanhos.map((t) => (
              <button key={t} className={`chip ${tam === t ? "chip--on" : ""}`} onClick={() => setTam(t)}>{t}</button>
            ))}
          </div>

          <h4>Cor</h4>
          <div className="chips">
            {cores.map((c) => (
              <button key={c} aria-label={`Cor ${c}`} className={`dot ${cor === c ? "dot--on" : ""}`} style={{ background: c }} onClick={() => setCor(c)} />
            ))}
          </div>

          <button className="btn btn--buy" disabled={!tam} onClick={() => setOk(true)}>COMPRAR</button>
          {!tam && <p className="hint">Escolha um tamanho para comprar.</p>}
          {ok && <p className="ok">Produto adicionado ao carrinho!</p>}
        </div>
      </div>

      <h2 className="section__title">Produtos relacionados</h2>
      <div className="grid grid--4">
        {products.filter((x) => x.id !== p.id).slice(0, 4).map((x) => <ProductCard key={x.id} product={x} />)}
      </div>
    </div>
  );
}
