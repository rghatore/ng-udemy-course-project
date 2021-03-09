import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from './recipe.model'

Injectable({
  providedIn: 'root',
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cashew Magic', `Add some magic to your cashew!`, 'https://images.unsplash.com/photo-1589706705875-774562f60260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),
    new Recipe('More Cashew Magic', `Add some more magic to your cashew!`, 'https://images.unsplash.com/photo-1589706705875-774562f60260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
