import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cashew Magic', `Add some magic to your cashew!`, 'https://images.unsplash.com/photo-1589706705875-774562f60260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),
    new Recipe('More Cashew Magic', `Add some more magic to your cashew!`, 'https://images.unsplash.com/photo-1589706705875-774562f60260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')
  ];
  @Output() showRecipe = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe(recipe: Recipe) {
    this.showRecipe.emit(recipe);
  }
}
