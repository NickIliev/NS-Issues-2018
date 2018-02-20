import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ListView [items]="[1, 2, 3, 4, 5, 6, 7, 8, 9]" rowHeight="40">
        <ng-template>
            <Label text="Label" style.background-color="#bbbbbb"></Label>
        </ng-template>
    </ListView>
  `
})
export class ItemsComponent {
  // Your TypeScript logic goes here
}