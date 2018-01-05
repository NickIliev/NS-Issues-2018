
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { RadGauge, RadRadialGauge, RadialScale, RadialNeedle, RadialBarIndicator, ScaleStyle } from "nativescript-pro-ui/gauges";
import { ObservableArray } from "data/observable-array";
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    let gauge: RadGauge = createGauge();

    page.content = gauge;
}

function createGauge(): RadGauge {
    let gauge = new RadRadialGauge();

    let scale = new RadialScale(); // <gauge:RadialScale minimum="0" maximum="6" radius="0.90">
    scale.minimum = 0;
    scale.maximum = 6;
    scale.radius = 0.9;

    let scaleStyle = new ScaleStyle();
    scaleStyle.majorTicksCount = 7;
    scaleStyle.minorTicksCount = 9;
    scaleStyle.lineThickness = 0;
    scaleStyle.labelsCount = 7;
    scaleStyle.ticksOffset = 0;

    scale.scaleStyle = scaleStyle;

    let indicator = new RadialBarIndicator();
    indicator.minimum = 0;
    indicator.maximum = 1.2;
    indicator.location = 0.97;

    scale.indicators = new ObservableArray();
    scale.indicators.push(indicator);

    gauge.scales = new ObservableArray();
    gauge.scales.push(scale);

    return gauge;
}