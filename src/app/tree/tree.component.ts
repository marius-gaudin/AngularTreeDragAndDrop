import { Component, Input, OnInit } from '@angular/core';
import { TreeService } from '../services/tree.service';
import { Node } from '../models/node.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() parent: Node | null | undefined = undefined;
  children: Node[] = [];

  constructor(private treeService: TreeService) { }

  ngOnInit(): void {
    if(typeof this.parent !== 'undefined')
    {
      this.children = this.treeService.getChildNodes(this.parent?.id ?? null);
    }
  }

  isOpen() {
    return this.parent === null || this.parent?.open;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.children, event.previousIndex, event.currentIndex);
  }

}
