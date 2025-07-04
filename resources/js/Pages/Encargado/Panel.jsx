import React from 'react';
import { Head, Link } from '@inertiajs/react';

const Panel = () => {
  return (
    <>
      <Head title="Panel del Encargado" />

      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Panel de Control - Encargado</h1>
        <div className="space-y-4">
          <Link
            href={route('encargado.productos.index')}
            className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Gestionar Productos
          </Link>
          <Link href={route('encargado.pedidos.index')} className="block bg-green-600 text-white p-2 rounded">Ver Pedidos</Link>
        <Link href={route('encargado.inventario.index')} className="block bg-yellow-600 text-white p-2 rounded">Inventario</Link>
        </div>
      </div>
    </>
  );
};


export default Panel;
