import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

const Web3 = require("web3").Web3;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    let web3 = new Web3();
}