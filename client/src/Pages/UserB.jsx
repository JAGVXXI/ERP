export const UserB = () => <h1>UserB</h1>
//Crear pàgina para Empleado, que pràcticamente lo redirijìa a un home distinto y opciòn para insertar productos
/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:5000/Products/');
            const stockRes = await axios.get('http://localhost:5000/Stock/');
            const productsWithStock = res.data.map(product => {
                const stock = stockRes.data.find(item => item.productId === product.id);
                return { ...product, stock: stock ? stock.quantity : 0 }
            });
            setProducts(productsWithStock);
        };
        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Existencias</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>
                                {product.stock > 0 ? product.stock : 'No hay existencias de este producto'}
                            </td>
                            <td>
                                <Link to={`/update-stock/${product.id}`} className="btn btn-primary">
                                    {product.stock > 0 ? 'Actualizar existencias' : 'Agregar existencias'}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserB;
 */