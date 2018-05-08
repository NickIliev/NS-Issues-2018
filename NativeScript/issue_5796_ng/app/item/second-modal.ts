import { Component, OnInit, NgModule } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "ui/date-picker";
import { Page } from "ui/page";

// >> passing-parameters
@Component({
    moduleId: module.id,
    templateUrl: "./second-modal.html",
})
export class SecondModalViewComponent implements OnInit {
    public currentdate: Date;

    constructor(private params: ModalDialogParams, private page: Page) {
        this.page.on("unloaded", () => {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            this.params.closeCallback();
        });
    }

    ngOnInit() { }

    public submit() {
        this.params.closeCallback("SECOND modal context!!!");
    }
}