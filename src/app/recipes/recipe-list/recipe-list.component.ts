import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe("A test recipe",'This is empty',
    'https://ep01.epimg.net/elcomidista/imagenes/2019/07/22/articulo/1563801848_984792_1563804092_noticia_normal.jpg'),
    new Recipe("A test recipe",'This is empty',
    'https://ep01.epimg.net/elcomidista/imagenes/2019/07/22/articulo/1563801848_984792_1563804092_noticia_normal.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
