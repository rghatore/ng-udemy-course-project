import { Component, Input, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  // can be sent to recipe list service after injecting shopping list service there
  addToList(): void {
    // console.log(this.recipe.ingredients);
    /*
    // unnecessary event emitting on every loop
    this.recipe.ingredients.forEach((ingredient: Ingredient) => {
      const name = ingredient.name;
      const amount = ingredient.amount;
      const newIngredient = new Ingredient(name, amount);
      this.shoppingListService.addIngredient(newIngredient);
    })
    */
   this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
