<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductoController extends Controller
{
    // Este es el correcto para renderizar con Inertia
public function index()
{
    $productos = \App\Models\Producto::all();

    return Inertia::render('Catalogo', [
        'productos' => $productos,
        'auth' => Auth::user(),
        'canLogin' => true,
        'canRegister' => true,
    ]);
}

    public function store(Request $request)
    {
        $producto = Producto::create($request->all());
        return redirect()->back()->with('success', 'Producto creado correctamente');
    }

    public function show($id)
    {
        $producto = Producto::findOrFail($id);

        return Inertia::render('DetalleProducto', [
            'producto' => $producto
        ]);
    }

    public function update(Request $request, Producto $producto)
    {
        $producto->update($request->all());
        return redirect()->back()->with('success', 'Producto actualizado');
    }

    public function destroy(Producto $producto)
    {
        $producto->delete();
        return redirect()->back()->with('success', 'Producto eliminado');
    }
}
