<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = [
        'user_id',
        'direccion_envio',
        'estado',
        'total',
        // agrega aquí cualquier otro campo que estés guardando
    ];
    public function usuario() {
    return $this->belongsTo(User::class, 'user_id');
}

public function productos()
{
    return $this->belongsToMany(Producto::class, 'pedido_productos')
                ->withPivot('cantidad', 'precio_unitario')
                ->withTimestamps();
}

}
