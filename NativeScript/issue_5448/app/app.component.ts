import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "my-app",
    template: `
    <ListView [items]="entries">
      <ng-template let-item="item" >
          <StackLayout>
              <Label (loaded)="onLoaded()" [text]="'test item ' + item"></Label>
          </StackLayout>
      </ng-template>
    </ListView>
    `
})
export class AppComponent {

    counter: number = 0;
    entries: Array<any>;

    onLoaded(event) {
      console.log("Label loaded " + (++this.counter) + " times");
    }

    ngOnInit() {
      this.entries = this.getEntries();
    }
    
    getEntries() {
      return [1, 2, 3, 4, 5];
    }
}
