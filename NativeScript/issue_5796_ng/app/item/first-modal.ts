import { Component, OnInit, NgModule, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions, ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "ui/date-picker";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { SecondModalViewComponent } from "./second-modal";

// >> passing-parameters
@Component({
    moduleId: module.id,
    templateUrl: "./first-modal.html",
})
export class ModalViewComponent implements OnInit {
    public currentdate: Date;

    constructor(private modalService: ModalDialogService, private params: ModalDialogParams, private page: Page, private vcRef: ViewContainerRef) {
        this.page.on("unloaded", () => {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            this.params.closeCallback();
        });
    }

    ngOnInit() { }

    public submit(args) {

        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false,
        };

        this.modalService.showModal(SecondModalViewComponent, options).then(res => {
            console.log("first modal promise")
            this.params.closeCallback(res);
        })
    }
}