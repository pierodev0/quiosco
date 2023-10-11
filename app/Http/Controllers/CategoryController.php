<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaCollection;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        // return response()->json([
        //     'categorias' => Category::all()
        // ]);

        return new CategoriaCollection(Category::all());
    }
}
