import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
export default function Header({ cartCount, search, setSearch }) {
  const [open, setOpen] = useState(false); const navigate = useNavigate();
  function submit(e) { e.preventDefault(); navigate('/produtos'); setOpen(false); }
  return <>
    <div className="top-strip">Frete grátis nas compras acima de R$ 299 <span>•</span> Até 10x sem juros</div>
    <header className="header"><div className="header-main container">
      <button className="mobile-menu icon-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu">☰</button>
      <Logo />
      <form className="search-box" onSubmit={submit}><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar produto..." aria-label="Pesquisar produto"/><button aria-label="Buscar">⌕</button></form>
      <div className="header-actions"><button className="account-link" onClick={() => alert('Área do cliente em breve!')}>Olá, visitante<br/><strong>Minha conta</strong></button><Link to="/carrinho" className="cart-link" aria-label="Carrinho">♧<span className="cart-count">{cartCount}</span></Link></div>
    </div>
    <nav className={`nav ${open ? 'nav-open' : ''}`}><div className="container nav-inner"><NavLink to="/" end onClick={() => setOpen(false)}>Início</NavLink><NavLink to="/produtos" onClick={() => setOpen(false)}>Produtos</NavLink><a href="/produtos?categoria=Tenis" onClick={() => setOpen(false)}>Tênis</a><a href="/produtos?categoria=Roupas" onClick={() => setOpen(false)}>Roupas</a><a href="/produtos?categoria=Acessorios" onClick={() => setOpen(false)}>Acessórios</a><a href="#footer" onClick={() => setOpen(false)}>Sobre nós</a></div></nav></header>
  </>;
}
