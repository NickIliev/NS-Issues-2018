import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { isAndroid, isIOS, device, screen } from "platform";
import * as app from "tns-core-modules/application"
import { OrientationChangedEventData } from "tns-core-modules/application";
import { Observable, Subscription } from 'rxjs';
import { Page } from 'tns-core-modules/ui/page';



@Component({
    selector: "Data",
    moduleId: module.id,
    templateUrl: "./data.component.html",
    styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, OnDestroy {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(public page: Page) {
    }


    ngDoCheck() {
    }


    ngOnDestroy() {        
    }


    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
    }




    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    
}
