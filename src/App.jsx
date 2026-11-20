import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import CartPage from './pages/CartPage';
function StoreApp(){ const [search,setSearch]=useState(''); const [cart,setCart]=useState([]); const cartCount=cart.reduce((sum,item)=>sum+item.qty,0);
 function addToCart(product,size=''){setCart(current=>{const found=current.find(item=>item.id===product.id&&item.size===size);if(found)return current.map(item=>item===found?{...item,qty:item.qty+1}:item);return [...current,{...product,size,qty:1}]});}
 function removeFromCart(target){setCart(current=>current.filter(item=>!(item.id===target.id&&item.size===target.size)));}
 function changeQty(target,delta){setCart(current=>current.map(item=>item.id===target.id&&item.size===target.size?{...item,qty:Math.max(1,item.qty+delta)}:item));}
 return <BrowserRouter><Header cartCount={cartCount} search={search} setSearch={setSearch}/><Routes><Route path="/" element={<HomePage onAdd={addToCart}/>}/><Route path="/produtos" element={<ProductListingPage search={search} onAdd={addToCart}/>}/><Route path="/produto/:id" element={<ProductViewPage onAdd={addToCart}/>}/><Route path="/carrinho" element={<CartPage cart={cart} onRemove={removeFromCart} onChangeQty={changeQty}/>}/><Route path="*" element={<main className="container page-space"><h1>Página não encontrada</h1></main>}/></Routes><Footer/></BrowserRouter>
}
export default StoreApp;
