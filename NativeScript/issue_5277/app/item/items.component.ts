import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as timer from "timer";
import { Button } from "ui/button";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    private smsText: string = "Get Code";
    private smsButtonEnabled: boolean = true;

    @ViewChild("smsButton") smsButton: ElementRef;
    private button : Button;

    private iosButton: UIButton;
    private iosButtonType: UIButtonType;

    constructor() { }

    ngAfterViewInit(): void {
        this.button = this.smsButton.nativeElement; // Button ()NativeScript)
        this.iosButton = this.button.nativeView;
        console.log(this.iosButton); // UIButton

        let newIosButton = UIButton.buttonWithType(UIButtonType.Custom);

        this.button.nativeView = newIosButton;

        console.log(this.button.nativeView.buttonType); // UIButtonType
    }
    

    onSMSTapped() {
        console.log("onSMSTapped")
        let count = 60;
        this.smsButtonEnabled = false;
        let id = timer.setInterval(() => {
            this.smsButton.nativeElement.text = `Resend(${count--})`; // After this line, the text in button above flashed (fade in and out), and text changed.
            if (count <= 1) {
                this.smsButton.nativeElement.text = `Resend`;
                this.smsButtonEnabled = true;
                timer.clearInterval(id);
            }
        }, 1000);
    }
}

