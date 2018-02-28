import { AfterViewInit, Component, QueryList, ViewChildren, ViewChild, ElementRef } from "@angular/core";
import { Label } from "tns-core-modules/ui/label";

@Component({
    selector: "YesNo",
    template: `
    <FlexboxLayout>
      <Label #lbl text="Yes"></Label>
      <CheckBox checked="true"></CheckBox>
    </FlexboxLayout>
    <StackLayout>
      <Label #lbl text="No"></Label>
      <CheckBox checked="false"></CheckBox>
    </StackLayout>`
})
export class ItemsComponent implements AfterViewInit {

    @ViewChildren("lbl") labelsUiSelector2: QueryList<ElementRef>;

    constructor() { }

    ngAfterViewInit() {

        console.log(JSON.stringify(this.labelsUiSelector2.length));  // 0
        
        console.log(this.labelsUiSelector2.first.nativeElement)
        console.log(this.labelsUiSelector2.last.nativeElement)
    }
}