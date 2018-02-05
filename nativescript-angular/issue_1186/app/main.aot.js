"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_static_1 = require("nativescript-angular/platform-static");
var app_module_ngfactory_1 = require("./app.module.ngfactory");
/* ***********************************************************
* The {N} Firebase plugin needs some initialization steps before it is ready
* for use. Check out the initialization script at /shared/firebase.common.ts
* along with more information about it.
*************************************************************/
require("./shared/firebase.common");
platform_static_1.platformNativeScript().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmFvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBHQUEwRztBQUMxRyx3RUFBNEU7QUFFNUUsK0RBQTREO0FBRTVEOzs7OzhEQUk4RDtBQUM5RCxvQ0FBa0M7QUFFbEMsc0NBQW9CLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyx5Q0FBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0tc3RhdGljXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZU5nRmFjdG9yeSB9IGZyb20gXCIuL2FwcC5tb2R1bGUubmdmYWN0b3J5XCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoZSB7Tn0gRmlyZWJhc2UgcGx1Z2luIG5lZWRzIHNvbWUgaW5pdGlhbGl6YXRpb24gc3RlcHMgYmVmb3JlIGl0IGlzIHJlYWR5XG4qIGZvciB1c2UuIENoZWNrIG91dCB0aGUgaW5pdGlhbGl6YXRpb24gc2NyaXB0IGF0IC9zaGFyZWQvZmlyZWJhc2UuY29tbW9uLnRzXG4qIGFsb25nIHdpdGggbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBpdC5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5pbXBvcnQgXCIuL3NoYXJlZC9maXJlYmFzZS5jb21tb25cIjtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHQoKS5ib290c3RyYXBNb2R1bGVGYWN0b3J5KEFwcE1vZHVsZU5nRmFjdG9yeSk7XG4iXX0=