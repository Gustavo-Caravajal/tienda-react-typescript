
import { useEffect, useState } from "react";
import { getLastProducts } from "../../services/products";
import type { ProductWithRelations } from "../../types/Product";
import { Hero } from "../Hero/Hero";
import './HeroContainer.css'
export const HeroContainer = () => {
    const [data, setData] = useState<ProductWithRelations[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getLastProducts();
            setData(res);
            setLoading(false)
        };
        fetchProducts();
    },[])
    
    return (<div className="hero-container">
        <h3>Últimos ingresos</h3>
        {loading ? (
            <p>Cargando...</p>
        ) : (
            <Hero list={data}/> 
        )}        
    </div>)
}