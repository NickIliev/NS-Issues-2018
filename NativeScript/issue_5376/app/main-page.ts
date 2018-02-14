import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { SearchBar } from 'ui/search-bar';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    page.bindingContext = new HelloWorldModel();
}

export function onSubmit(args){
    const searchbar = <SearchBar>args.object;
    console.log("Search submit result: "+ searchbar.text);
}
export function onClear(args){
    console.log("clear search-bar text");
}

