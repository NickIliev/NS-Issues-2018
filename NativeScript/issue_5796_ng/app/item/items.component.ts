import { Component, OnInit, ViewContainerRef } from "@angular/core";

import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalViewComponent } from "./first-modal";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    secondModalContext: string;

    constructor(private modalService: ModalDialogService, private vcRef: ViewContainerRef) { }

    openModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false,
        };

        this.modalService.showModal(ModalViewComponent, options).then(res => {
            console.log(res);
            this.secondModalContext = res;
        })
    }
}