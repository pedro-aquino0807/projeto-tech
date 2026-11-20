import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";

const unique = (key) => [...new Set(products.map((p) => p[key]))];

export default function Products() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();
  const cat = params.get("cat");
  const [order, setOrder] = useState("relevante");
  const [brands, setBrands] = useState([]);
  const [cats, setCats] = useState(cat ? [cat] : []);

  const toggle = (list, setList, v) =>
    setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const lista = useMemo(() => {
    let r = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) &&
        (!brands.length || brands.includes(p.brand)) &&
        (!cats.length || cats.includes(p.category))
    );
    if (order === "menor") r = [...r].sort((a, b) => a.price - b.price);
    if (order === "maior") r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [q, brands, cats, order]);

  return (
    <div className="container section">
      <div className="section__head">
        <h2>{q ? `Resultados para "${q}"` : "Todos os produtos"} <small>({lista.length} produtos)</small></h2>
        <label>
          Ordenar por{" "}
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="relevante">Mais relevantes</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </select>
        </label>
      </div>
      <div className="listing">
        <aside className="filters">
          <h3>Filtrar por</h3>
          <h4>Marca</h4>
          {unique("brand").map((b) => (
            <label key={b}><input type="checkbox" checked={brands.includes(b)} onChange={() => toggle(brands, setBrands, b)} /> {b}</label>
          ))}
          <h4>Categoria</h4>
          {unique("category").map((c) => (
            <label key={c}><input type="checkbox" checked={cats.includes(c)} onChange={() => toggle(cats, setCats, c)} /> {c}</label>
          ))}
        </aside>
        {lista.length ? (
          <div className="grid grid--3">{lista.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        ) : (
          <p>Nenhum produto encontrado. Tente remover alguns filtros.</p>
        )}
      </div>
    </div>
  );
}
