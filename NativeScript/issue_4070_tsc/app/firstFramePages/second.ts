import { EventData } from "data/observable";
import { Page } from "ui/page";

export function onNavigatingTo(args: EventData) {
  let page = <Page>args.object;

  console.log("SECOND Frame's page navigated successfully.");
};