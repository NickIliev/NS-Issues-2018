
## Startup times

using base Angular template
```
tns create textApp --ng
```

### Using Nexus 5x with Android 8.1 and the following command:
```
tns run android --bundle --env.uglify --env.snapshot --env.aot --release <release-params-follows> | timeline-view
```

| tns-android      | tns-core-modules   | nativescript-dev-webpack  | TIME  in sec  |
| :---------------:|:------------------:|:-------------------------:|:-------------:|
| 3.4.2            | 3.4.0              | 0.9.2                     | ~2.300        |
| 4.0.0-2018.3.9.1 | 4.0.0-2018-03-08-03| 0.10.0-2018-03-10-01      | ~4.400        |


### Using Nexus 5x with Android 8.1 and the following command (no Webpack):
```
tns run android --release <release-params-follows> | timeline-view
```
| tns-android      | tns-core-modules   | nativescript-dev-webpack  | TIME  in sec  |
| :---------------:|:------------------:|:-------------------------:|:-------------:|
| 3.4.2            | 3.4.0              | N/A (no Webpack)          | ~8.900        |
| 4.0.0-2018.3.9.1 | 4.0.0-2018-03-08-03| N/A (no Webpack)          | ~13.400       |
