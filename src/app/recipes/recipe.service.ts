import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Huevos con patatas',
         'This is simply a test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [
             new Ingredient('Meat',1),
             new Ingredient('Cheese',2)
            
        ]),
        new Recipe('Hamburguesa', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
            new Ingredient('Meat',1),
            new Ingredient('Buns',2)
        ])
    ];

    constructor(private slService:ShoppingListService){

    }
    gerRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingLIst(ingredients:Ingredient[]){
        this.slService.addOtherIngredients(ingredients);
    }
}