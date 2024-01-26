import React, {useState,useEffect} from "react";
import axios from 'axios';
import Producto from "../components/MiniaturaProducto.js";
import './../styles/components/pages/ProductosPage.css';

const ProductosPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() =>{
      const cargarProductos = async () => {
          setLoading(true);
          const response = await axios.get('http://localhost:3000/api/productos');
          setProductos(response.data);
          setLoading(false);
      };

      cargarProductos();
  }, []);
  
  return (
    <section className="container">
        {loading ? (
            <p>Cargando...</p>
        ) : (
            productos.map(item => <Producto key={item.id}
                imagen={item.imagen} name={item.nombre} price={item.precio}/>)
        )}
    </section>
  )
}

export default ProductosPage;