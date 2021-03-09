import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from '../shared/ingredient.model';

Injectable({
  providedIn: 'root',
})

export class ShoppingListService {
  updateIngredient = new EventEmitter<string>();

  private ingredients: Ingredient[] = [
    new Ingredient('Cashews', 8),
    new Ingredient('Garam Masala', 2)
  ];

  getIngredients() {
    // return [...this.ingredients];
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.updateIngredient.emit('update'); // or just send the ingredients array
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updateIngredient.emit('update');
  }
}
