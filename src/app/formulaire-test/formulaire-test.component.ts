import { Component } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-formulaire-test',
  templateUrl: './formulaire-test.component.html',
  styleUrls: ['./formulaire-test.component.css']
})
export class FormulaireTestComponent {
  unProduitTest:Produit = {
    nom:"", description:""
  }

  nomDeMaFonctionClick() {
    console.log(this.unProduitTest);
  }
}
