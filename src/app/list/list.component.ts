import { Component, OnInit } from '@angular/core';
import { Listelement } from '../listelement';
import { LIST } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listelement: Listelement = {
    id: 1,
    value: "First"
  }
  list = LIST;
  selectedElement: Listelement;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(selectedElement: Listelement): void {
    this.selectedElement = selectedElement;
  }
}
