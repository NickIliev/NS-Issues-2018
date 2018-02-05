import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";

import { ListViewEventData } from "nativescript-pro-ui/listview";

import { Injectable } from '@angular/core';
import { DATAITEMS } from "./mock-dataItems";
import { DataItem } from "./dataItem";
var namesAndEmails = require("../NamesAndEmails.json");
var posts = require("../posts.json");
var listItems = require("../listItems.json");

export class DataItem {
  constructor(public id?: number, public name?: string, public description?: string, public title?: string, public text?: string, public image?: string, public selected?: boolean, public type?: string) {
  }
}

@Injectable()
export class DataItemService {
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    getDataItems(): DataItem[] {
        return DATAITEMS;
    }

    getIdenticalDataItems(size: number): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < size; i++) {
            result.push(new DataItem(i, "Item " + i, "This is item description."));
        }

        return result;
    }

    getPersonDataItems(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < namesAndEmails.names.length; i++) {
            result.push(new DataItem(i, namesAndEmails.names[i], "This is item description"));
        }

        return result;
    }

    getNameEmailDataItems(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < namesAndEmails.names.length; i++) {
            result.push(new DataItem(i, namesAndEmails.names[i], namesAndEmails.emails[i]));
        }

        return result;
    }

    getPostDataItems(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < posts.names.length; i++) {
            result.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i]));
        }

        return result;
    }

    getListItemsFromJson(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < listItems.items.length; i++) {
            result.push(new DataItem(i, listItems.items[i].author, "This is item description", listItems.items[i].title, listItems.items[i].category, listItems.items[i].photo));
        }

        return result;
    }

    getStaggeredItems(): DataItem[] {
        var result = new Array<DataItem>();
        for (var i = 0; i < 50; i++) {
            result.push(new DataItem(i, "Item " + i, this.getRandomLengthString()));
        }

        return result;
    }

    private getRandomLengthString() {
      var sentenceLength = Math.round((Math.random() * 15));
      var result = this._words[0];
      for (var i = 0; i < sentenceLength; i++) {
       result += (this._words[i % this._words.length] + " ");
      }
       return result;
   }
}


@Component({
    moduleId: module.id,
    selector: "tk-listview-item-reorder",
    providers: [DataItemService],
    templateUrl: "listview-item-reorder.component.html",
    styleUrls: ["listview-item-reorder.component.css"]
})
// >> angular-listview-reorder-component
export class ListViewItemReorderComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getPersonDataItems());
    }

    public onItemReordered(args: ListViewEventData) {
        console.log("Item reordered. Old index: " + args.index + " " + "new index: " + args.data.targetIndex);
    }
}
// << angular-listview-reorder-component