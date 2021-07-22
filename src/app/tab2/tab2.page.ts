import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items = [1, 2, 3, 4, 5];

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() {}

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // Before complete is called with the items they will remain in the
    // order before the drag

    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    console.log('Before complete', this.items);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.items = ev.detail.complete(this.items);

    // After complete is called the items will be in the new order
    console.log('After complete', this.items);
  }

  dragStart() {
    console.log('dragstart');
  }

}
