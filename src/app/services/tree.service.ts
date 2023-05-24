import { Injectable } from '@angular/core';
import { Node } from '../models/node.model';

const DB: Node[] = [
  { id: 1, title: "Manteaux", parent: null, open: false },
	{ id: 2, title: "Homme", parent: 1, open: false },
  { id: 3, title: "Femmes", parent: 1, open: false },
  { id: 4, title: "Enfants", parent: 1, open: false },
	{ id: 5, title: "Chaussures", parent: null, open: false },
	{ id: 6, title: "Homme", parent: 5, open: false },
  { id: 7, title: "Femmes", parent: 5, open: false },
	{ id: 8, title: "Bleu", parent: 6, open: false },
  { id: 9, title: "Rose", parent: 6, open: false },
	{ id: 10, title: "Rouge", parent: 7, open: false },
  { id: 11, title: "Noir", parent: 7, open: false },
	{ id: 12, title: "Blanc", parent: 7, open: false },
	{ id: 13, title: "Autres", parent: 7, open: false },
	{ id: 14, title: "Bottes", parent: 13, open: false },
	{ id: 15, title: "Talons", parent: 13, open: false },
  { id: 16, title: "Chapeaux", parent: null, open: false }
]

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  getChildNodes(parentId: number | null): Node[] {
    return DB.filter(node => node.parent === parentId);
  }
}
