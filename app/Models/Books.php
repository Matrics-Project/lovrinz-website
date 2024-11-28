<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    //
    protected $fillable = [
        'title',
        'author',
        'publisher',
        'publication_year',
        'category',
        'page_count',
        'description',
        'price',
        'img',
        'url',
    ];
}
