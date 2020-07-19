import { Component } from '@angular/core';
import { Model, TodoItem } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplay = false;
  model = new Model();

  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter(x => x.action == false);
  }

  addItem(value) {
    if (value != null) {
      this.model.items.push(new TodoItem(value, false));
    }
  }
}
