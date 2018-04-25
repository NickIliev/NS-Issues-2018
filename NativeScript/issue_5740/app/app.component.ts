import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
    <StackLayout>
      <Label text="some text"></Label>
      <Label text="some text"></Label>
    </StackLayout>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
}
