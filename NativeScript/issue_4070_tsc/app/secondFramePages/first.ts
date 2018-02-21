import { EventData } from "data/observable";
import { Page } from "ui/page";

export function onNavigatingTo(args: EventData) {
  let page = <Page>args.object;

  console.log("Second Frame's - first page navigated successfully.");
};