import React from "react";

const ProductForm = ({ form, setForm, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label>Nombre del Producto</label>
        <input
          type="text"
          className="form-control"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label>Precio</label>
        <input
          type="number"
          className="form-control"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {form.id ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default ProductForm;
