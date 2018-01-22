import { Component, OnInit, NgZone } from "@angular/core";



@Component({
    selector: "ns-items",
    moduleId: __filename,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    public url: string = "default";
    private ready: boolean = false;
    private worker = new Worker("./http-string-worker");

    constructor(private zone: NgZone) { 
        this.worker.onmessage = (msg) => {
            console.log("msg received");
            console.log(msg.data);
            this.zone.run(() => {
                this.url = msg.data["url"];
                this.ready = true;
            })
        }

        this.worker.onerror = (e) => {
            this.ready = true;
            throw e;
        }
    }

    ngOnInit(): void {
        

    }

    ngOnChanges() {
        console.log(this.ready);
    }
}