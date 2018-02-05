
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";

import { SharedModule } from "../shared/shared.module";
import { DataRoutingModule } from "./data-routing.module";
import { AddNewDataComponent } from './add-new-data/add-new-data.component';


@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        DataRoutingModule,
        NativeScriptFormsModule,
        SharedModule
    ],
    declarations: [
        AddNewDataComponent
    ],
    entryComponents: [
    ],

    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ModalDialogService
    ]
})
export class DataModule { }
