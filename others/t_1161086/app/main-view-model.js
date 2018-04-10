"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var fs = require("file-system");
require("nativescript-nodeify");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    HelloWorldModel.prototype.nedbMemory = function () {
        var Nedb = require('nedb');
        var db = new Nedb({ autoload: true });
        var doc = { foo: "bar" };
        db.insert(doc, function (err, newDoc) {
            console.log("err: " + err);
            console.log("newDoc: " + JSON.stringify(newDoc));
        });
    };
    ;
    HelloWorldModel.prototype.nedbFs = function () {
        var Nedb = require('nedb');
        var path = fs.knownFolders.documents().path + '/database.db';
        var db = new Nedb({
            filename: path
        });
        db.loadDatabase(function (err) {
            // Now commands will be executed
            var doc = { "foo": "bar" };
            db.insert(doc, function (err, newDoc) {
                console.log("err: " + err);
                console.log("newDoc: " + JSON.stringify(newDoc));
            });
        });
    };
    ;
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLGdDQUFrQztBQUNsQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUVoQztJQUFxQyxtQ0FBVTtJQUUzQztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFNLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMzQixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBQSxDQUFDO0lBRUYsZ0NBQU0sR0FBTjtRQUNJLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFFL0QsSUFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUM7WUFDaEIsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFDLEdBQUc7WUFDaEIsZ0NBQWdDO1lBQ2hDLElBQU0sR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLE1BQU07Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBQSxDQUFDO0lBQ04sc0JBQUM7QUFBRCxDQUFDLEFBakNELENBQXFDLHVCQUFVLEdBaUM5QztBQWpDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LW5vZGVpZnlcIik7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG5lZGJNZW1vcnkoKSB7XG4gICAgICAgIGNvbnN0IE5lZGIgPSByZXF1aXJlKCduZWRiJyk7XG4gICAgICAgIGNvbnN0IGRiID0gbmV3IE5lZGIoeyBhdXRvbG9hZDogdHJ1ZSB9KTtcbiAgICAgICAgY29uc3QgZG9jID0geyBmb286IFwiYmFyXCIgfTtcbiAgICAgICAgZGIuaW5zZXJ0KGRvYywgKGVyciwgbmV3RG9jKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycjogXCIgKyBlcnIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdEb2M6IFwiICsgSlNPTi5zdHJpbmdpZnkobmV3RG9jKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBuZWRiRnMoKSB7XG4gICAgICAgIGNvbnN0IE5lZGIgPSByZXF1aXJlKCduZWRiJyk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aCArICcvZGF0YWJhc2UuZGInO1xuXG4gICAgICAgIGNvbnN0IGRiID0gbmV3IE5lZGIoe1xuICAgICAgICAgICAgZmlsZW5hbWU6IHBhdGhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGIubG9hZERhdGFiYXNlKChlcnIpID0+IHtcbiAgICAgICAgICAgIC8vIE5vdyBjb21tYW5kcyB3aWxsIGJlIGV4ZWN1dGVkXG4gICAgICAgICAgICBjb25zdCBkb2MgPSB7IFwiZm9vXCI6IFwiYmFyXCIgfTtcbiAgICAgICAgICAgIGRiLmluc2VydChkb2MsIGZ1bmN0aW9uIChlcnIsIG5ld0RvYykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyOiBcIiArIGVycik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdEb2M6IFwiICsgSlNPTi5zdHJpbmdpZnkobmV3RG9jKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiJdfQ==