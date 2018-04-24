import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ListView [items]="[1, 2, 3, 4, 5, 6, 7, 8]" rowHeight="40">
        <ng-template>
            <StackLayout>
              <Label height="40" text="Label" style.background-color="#bbbbbb"></Label>
            </StackLayout>
        </ng-template>
    </ListView>
  `
})
export class ItemsComponent { }