
import { EventData } from 'data/observable';
import { Page } from 'ui/page';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
}

export function navigatedTo(args) {
    const page = <Page>args.object;
    const frame = page.frame;

    frame.navigate("secondary-page"); // crashes with The specified child already has a parent. You must call removeView() on the child's parent first.

    // The will work as expected
    // setTimeout(() => {
    //     frame.navigate("secondary-page");
    // }, 300);
}