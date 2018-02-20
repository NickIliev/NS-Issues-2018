import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ListView [items]="[1, 2, 3, 4, 5, 6, 7, 8]" rowHeight="40">
        <ng-template>
            <Label height="40" text="Label" style.background-color="#bbbbbb"></Label>
        </ng-template>
    </ListView>
  `
})
export class ItemsComponent {
  // Your TypeScript logic goes here
}