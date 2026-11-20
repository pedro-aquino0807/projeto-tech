import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductOptions from '../components/ProductOptions';
import BuyBox from '../components/BuyBox';
import ProductDetails from '../components/ProductDetails';
import ProductListing from '../components/ProductListing';
export default function ProductViewPage({ onAdd }) { const { id } = useParams(); const product = products.find(p=>p.id === Number(id)); const [size,setSize] = useState('');
 if(!product) return <main className="container page-space"><h1>Produto não encontrado</h1><Link to="/produtos" className="text-link">Voltar aos produtos</Link></main>;
 return <main className="container page-space"><div className="breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/produtos">Produtos</Link><span>/</span>{product.name}</div><div className="product-detail-layout"><div className="detail-image"><img src={product.image} alt={product.name}/><span className="product-tag">{product.tag}</span></div><div className="detail-content"><span className="product-category">{product.category}</span><h1>{product.name}</h1><div className="rating detail-rating">★★★★★ <span>{product.rating} · {product.reviews} avaliações</span></div><p className="detail-intro">{product.description}</p><div className="detail-divider"></div><ProductOptions selected={size} setSelected={setSize}/><BuyBox product={product} onAdd={()=>onAdd(product,size)}/><p className="secure-note">Compra segura · Envio para todo o Brasil</p></div></div><ProductDetails product={product}/><section className="section"><div className="section-heading"><div><h2>Você também pode gostar</h2><p>Outras escolhas que combinam com você.</p></div></div><ProductListing products={products.filter(p=>p.id!==product.id).slice(0,4)} onAdd={onAdd}/></section></main>;
}
