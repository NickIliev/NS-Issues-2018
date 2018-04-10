import { Observable } from 'data/observable';
import * as fs from "file-system";
require("nativescript-nodeify");

export class HelloWorldModel extends Observable {

    constructor() {
        super();
    }

    nedbMemory() {
        const Nedb = require('nedb');
        const db = new Nedb({ autoload: true });
        const doc = { foo: "bar" };
        db.insert(doc, (err, newDoc) => {
            console.log("err: " + err);
            console.log("newDoc: " + JSON.stringify(newDoc));
        });
    };

    nedbFs() {
        const Nedb = require('nedb');
        const path = fs.knownFolders.documents().path + '/database.db';

        const db = new Nedb({
            filename: path
        });

        db.loadDatabase((err) => {
            // Now commands will be executed
            const doc = { "foo": "bar" };
            db.insert(doc, function (err, newDoc) {
                console.log("err: " + err);
                console.log("newDoc: " + JSON.stringify(newDoc));
            });
        });
    };
}
