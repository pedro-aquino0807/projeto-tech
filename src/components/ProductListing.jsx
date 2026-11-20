import ProductCard from './ProductCard';
export default function ProductListing({ products, onAdd }) { return <div className="product-grid">{products.length ? products.map(product => <ProductCard key={product.id} product={product} onAdd={onAdd}/>) : <div className="empty-state">Nenhum produto encontrado. Tente outra busca ou categoria.</div>}</div>; }
