
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    var items = [{
        title: 'Some title of 0',
        'attr.name1': 10,
        'attr.name2': 20
        }, {
    }]
    let vm = new HelloWorldModel();
    vm.set("items", items);

    page.bindingContext = vm;
}