import React, { useEffect, useState } from "react";
import ProductTable from "./TablaProducto";
import ProductForm from "./Apartado";
import { getProducts, createProduct, updateProduct, deleteProduct } from "./FuncionesAPI/API";

const Principal = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ title: "", price: "" });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchProducts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (editId) {
            const updatedProduct = await updateProduct(editId, form);
            console.log("Producto actualizado:", updatedProduct);
            setProducts(products.map((p) => (p.id === editId ? updatedProduct : p)));
          } else {
            const newProduct = await createProduct(form);
            console.log("Producto creado en la API:", newProduct);
            setProducts([...products, newProduct]); 
          }
          setForm({ title: "", price: "" });
          setEditId(null);
        } catch (error) {
          console.error("Error al procesar el producto:", error.message);
        }
      };
      
    const handleEdit = (product) => {
        setForm({ title: product.title, price: product.price });
        setEditId(product.id);
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(products.filter((p) => p.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="container mt-4">
            <h1>API Productos TufClasicas</h1>
            <ProductForm form={form} setForm={setForm} onSubmit={handleSubmit} />
            <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default Principal;
