import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

const vm = new HelloWorldModel();

declare let UISearchBarStyle: any;
declare let UIImage: any;

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = vm;
}

export function showSearchbar() {
    vm.set("searchbarVisible", true);
};


export function onSearchBarLoaded(args) {
    var searchbar = args.object;

    if(searchbar.android) {
        searchbar.android.clearFocus();
    } else if(searchbar.ios) {
        searchbar.ios.searchBarStyle = UISearchBarStyle.Prominent;
        searchbar.ios.backgroundImage = UIImage.new();
    }
};


export function onSearchBarCleared(args) {
    //iOS: sobald Suchfeld geleert wird, wird Tastatur geschlossen
    //(da Tastatur nicht manuell geschlossen werden kann und damit die unteren Listenelemente verdecken würde)
    if(args.object.ios) {
        setTimeout(function () {
            args.object.dismissSoftInput();
        }, 100);
    }
};