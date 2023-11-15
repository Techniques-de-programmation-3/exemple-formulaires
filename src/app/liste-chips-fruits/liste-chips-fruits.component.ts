import { Component } from '@angular/core';

// Import ajouté, nécessaire pour récupérer la valeur cliquée dans la liste de choix
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-liste-chips-fruits',
  templateUrl: './liste-chips-fruits.component.html',
  styleUrls: ['./liste-chips-fruits.component.css']
})
export class ListeChipsFruitsComponent {
  input_fruit : string = ""; 
  
  listeCompleteFruits: string[] = ['Pomme', 'Citron', 'Lime', 'Orange', 'Fraise']; // Options de la liste
  listeFruitsFiltres: string[] = this.listeCompleteFruits;  // liste des fuits filtrés, on aurait aussi pu mettre = 
  //listeFruitsFiltres = this.listeCompleteFruits; // Aussi valide, si à la création du composant, on assume que la liste filtrée contient toutes les valeurs possibles
  
  fruitsChoisis: string[] = ['Fraise']; // Éléments déjà présents au chargement de la page
  //fruitsChoisis: string[] = []; // Si on ne veut aucun choix pré-sélectionné

  /**
   * Le constructeur est appelé à la construction du composant.
   * Il filtre la liste des fruits en fonction de l'état initial du composant
   * Attention : Le constructeur (lignes 27 à 29) doivent être retirée si vous utilisez la ligne 18
   */
  constructor() {
    this.filtrer();
  }

  /**
   * Retire l'élément cliqué de la liste des fruits choisi
   * @param fruit : correspond au fruit cliqué
   */
  retirer(fruit: string): void {
    const index = this.fruitsChoisis.indexOf(fruit);

    if (index >= 0) {
      this.fruitsChoisis.splice(index, 1);
    }
  }

  /**
   * Ajoute le fruit 
   * @param event : permet de récupérer l'option sélectionnée dans la liste 
   */
  ajouter(event: MatAutocompleteSelectedEvent): void {
    let valeurChoisie = event.option.viewValue;

    // s'il n'est pas déjà présent dans la liste
    if(!this.fruitsChoisis.includes(valeurChoisie)) {
      this.fruitsChoisis.push(valeurChoisie);
    }

    this.input_fruit = '';  // réinitialise la zone de texte
  }

  /**
   * Filtre la liste complete en fonction de la valeur saisie 
   * dans la zone de texte associée à la varibale input_fruit
   */
  filtrer(): void {
    this.listeFruitsFiltres =  this.listeCompleteFruits.filter(fruit => fruit.toLowerCase().includes(this.input_fruit));
  }

}

