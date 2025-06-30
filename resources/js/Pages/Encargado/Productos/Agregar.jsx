// Agregar.jsx
import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Agregar() {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    talla: '',
    precio: '',
    imagen: '',
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    // Validación en tiempo real
    if (name === 'precio' && value < 0) {
      setErrors(prev => ({ ...prev, precio: 'El precio debe ser mayor que 0' }));
    } else {
      setErrors(prev => ({ ...prev, [name]: null }));
    }

    if (name === 'imagen') {
      setPreview(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.post(route('encargado.productos.store'), form, {
      onSuccess: () => {
        alert('Producto agregado correctamente');
        setForm({ nombre: '', descripcion: '', talla: '', precio: '', imagen: '' });
        setErrors({});
        setPreview('');
      },
      onError: (errors) => setErrors(errors),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-green-600 mb-6">Agregar Nuevo Producto</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: 'Nombre', name: 'nombre', type: 'text' },
            { label: 'Descripción', name: 'descripcion', type: 'textarea' },
            { label: 'Talla', name: 'talla', type: 'text' },
            { label: 'Precio', name: 'precio', type: 'number', step: '0.01' },
            { label: 'Imagen (URL)', name: 'imagen', type: 'text' },
          ].map(({ label, name, type, step }) => (
            <div key={name}>
              <label className="block font-medium text-gray-700">{label}</label>
              {type === 'textarea' ? (
                <textarea
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-green-500 focus:border-green-500"
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  step={step}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-green-500 focus:border-green-500"
                />
              )}
              {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
            </div>
          ))}

          {preview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-1">Vista previa:</p>
              <img src={preview} alt="Vista previa" className="w-32 h-32 object-cover rounded shadow" />
            </div>
          )}

          <div className="text-right">
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Guardar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
