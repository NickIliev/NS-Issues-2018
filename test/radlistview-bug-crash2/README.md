##RadListView Crashing App When ReorderHandle Is Touched##

This is an issue that I found when using Nativescript's RadListView.  The issue happens when I quickly touch a ReorderHandle of a row and immediately fling my finger, the app will crash.  However, if I hold and actually move the ReorderHandle, the row will move with no issue.

I have captured a video to show this issue: https://youtu.be/uCAST_1APj0

This issue is reproducable on Android (Android 8.1 on Nexus 6P & Android 7.1.2 on Nexus 4).  Logcat captured here:

JS: Angular is running in the development mode. Call enableProdMode() to enable the production mode.
02-03 19:33:39.089 27154 27154 E MessageQueue-JNI: 	at com.tns.Runtime.callJSMethodNative(Native Method)
02-03 19:33:39.089 27154 27154 E MessageQueue-JNI: 	at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:1088)
02-03 19:33:39.089 27154 27154 E MessageQueue-JNI: 	at com.tns.Runtime.callJSMethodImpl(Runtime.java:970)
02-03 19:33:39.089 27154 27154 E MessageQueue-JNI: 	at com.tns.Runtime.callJSMethod(Runtime.java:957)
02-03 19:33:39.089 27154 27154 E MessageQueue-JNI: 	at com.tns.Runtime.callJSMethod(Runtime.java:941)
02-03 19:33:39.089 27154 27154 E MessageQueue-JNI: 	at com.tns.Runtime.callJSMethod(Runtime.java:933)
02-03 19:33:39.092 27154 27154 E AndroidRuntime: 	at com.tns.Runtime.callJSMethodNative(Native Method)
02-03 19:33:39.092 27154 27154 E AndroidRuntime: 	at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:1088)
02-03 19:33:39.092 27154 27154 E AndroidRuntime: 	at com.tns.Runtime.callJSMethodImpl(Runtime.java:970)
02-03 19:33:39.092 27154 27154 E AndroidRuntime: 	at com.tns.Runtime.callJSMethod(Runtime.java:957)
02-03 19:33:39.092 27154 27154 E AndroidRuntime: 	at com.tns.Runtime.callJSMethod(Runtime.java:941)
02-03 19:33:39.092 27154 27154 E AndroidRuntime: 	at com.tns.Runtime.callJSMethod(Runtime.java:933)
System.err: com.tns.NativeScriptException: 
System.err: Calling js method onReorderFinished failed
System.err: 
System.err: Error: Item must be an object from the currently assigned source.
System.err: File: "file:///data/data/com.brainworks.radlistview.bug.crash2/files/app/tns_modules/nativescript-pro-ui/listview/listview.js, line: 443, column: 12
System.err: 
System.err: StackTrace: 
System.err: 	Frame: function:'ZoneAwareError', file:'file:///data/data/com.brainworks.radlistview.bug.crash2/files/app/tns_modules/nativescript-angular/zone-js/dist/zone-nativescript.js', line: 993, column: 33
System.err: 	Frame: function:'RadListView.getViewForItem', file:'file:///data/data/com.brainworks.radlistview.bug.crash2/files/app/tns_modules/nativescript-pro-ui/listview/listview.js', line: 443, column: 19
System.err: 	Frame: function:'onReorderFinished', file:'file:///data/data/com.brainworks.radlistview.bug.crash2/files/app/tns_modules/nativescript-pro-ui/listview/listview.js', line: 1046, column: 47
System.err: 
System.err: 	at com.tns.Runtime.callJSMethodNative(Native Method)
System.err: 	at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:1088)
System.err: 	at com.tns.Runtime.callJSMethodImpl(Runtime.java:970)
System.err: 	at com.tns.Runtime.callJSMethod(Runtime.java:957)
System.err: 	at com.tns.Runtime.callJSMethod(Runtime.java:941)
System.err: 	at com.tns.Runtime.callJSMethod(Runtime.java:933)
System.err: 	at com.tns.gen.com.telerik.widget.list.ItemReorderBehavior_ItemReorderListener.onReorderFinished(Unknown Source:5)
System.err: 	at com.telerik.widget.list.ItemReorderBehavior.endReorder(ItemReorderBehavior.java:238)
System.err: 	at com.telerik.widget.list.ReorderWithHandlesBehavior.endReorder(ReorderWithHandlesBehavior.java:89)
System.err: 	at com.telerik.widget.list.ReorderWithHandlesBehavior.onActionUpOrCancel(ReorderWithHandlesBehavior.java:51)
System.err: 	at com.telerik.widget.list.ListViewGestureListener.onActionUpOrCancel(ListViewGestureListener.java:203)
System.err: 	at com.telerik.widget.list.ListViewGestureListener.onTouchEvent(ListViewGestureListener.java:103)
System.err: 	at com.telerik.widget.list.RadListView.onTouchEvent(RadListView.java:551)
System.err: 	at android.view.View.dispatchTouchEvent(View.java:11776)
System.err: 	at android.view.ViewGroup.dispatchTransformedTouchEvent(ViewGroup.java:2962)
System.err: 	at android.view.ViewGroup.dispatchTouchEvent(ViewGroup.java:2643)
System.err: 	at android.view.ViewGroup.dispatchTransformedTouchEvent(ViewGroup.java:2968)
System.err: 	at android.view.ViewGroup.dispatchTouchEvent(ViewGroup.java:2657)
System.err: 	at android.view.ViewGroup.dispatchTransformedTouchEvent(ViewGroup.java:2968)
System.err: 	at android.view.ViewGroup.dispatchTouchEvent(ViewGroup.java:2657)
System.err: 	at android.view.ViewGroup.dispatchTransformedTouchEvent(ViewGroup.java:2968)
System.err: 	at android.view.ViewGroup.dispatchTouchEvent(ViewGroup.java:2657)
System.err: 	at android.view.ViewGroup.dispatchTransformedTouchEvent(ViewGroup.java:2968)
System.err: 	at android.view.ViewGroup.dispatchTouchEvent(ViewGroup.java:2657)
System.err: 	at android.view.ViewGroup.dispatchTransformedTouchEvent(ViewGroup.java:2968)
System.err: 	at android.view.ViewGroup.dispatchTouchEvent(ViewGroup.java:2657)
System.err: 	at android.view.ViewGroup.dispatchTransformedTouchEvent(ViewGroup.java:2968)
System.err: 	at android.view.ViewGroup.dispatchTouchEvent(ViewGroup.java:2657)
System.err: 	at android.view.ViewGroup.dispatchTransformedTouchEvent(ViewGroup.java:2968)
System.err: 	at android.view.ViewGroup.dispatchTouchEvent(ViewGroup.java:2657)
System.err: 	at com.android.internal.policy.DecorView.superDispatchTouchEvent(DecorView.java:448)
System.err: 	at com.android.internal.policy.PhoneWindow.superDispatchTouchEvent(PhoneWindow.java:1829)
System.err: 	at android.app.Activity.dispatchTouchEvent(Activity.java:3307)
System.err: 	at com.android.internal.policy.DecorView.dispatchTouchEvent(DecorView.java:410)
System.err: 	at android.view.View.dispatchPointerEvent(View.java:12015)
System.err: 	at android.view.ViewRootImpl$ViewPostImeInputStage.processPointerEvent(ViewRootImpl.java:4795)
System.err: 	at android.view.ViewRootImpl$ViewPostImeInputStage.onProcess(ViewRootImpl.java:4609)
System.err: 	at android.view.ViewRootImpl$InputStage.deliver(ViewRootImpl.java:4147)
System.err: 	at android.view.ViewRootImpl$InputStage.onDeliverToNext(ViewRootImpl.java:4200)
System.err: 	at android.view.ViewRootImpl$InputStage.forward(ViewRootImpl.java:4166)
System.err: 	at android.view.ViewRootImpl$AsyncInputStage.forward(ViewRootImpl.java:4293)
System.err: 	at android.view.ViewRootImpl$InputStage.apply(ViewRootImpl.java:4174)
System.err: 	at android.view.ViewRootImpl$AsyncInputStage.apply(ViewRootImpl.java:4350)
System.err: 	at android.view.ViewRootImpl$InputStage.deliver(ViewRootImpl.java:4147)
System.err: 	at android.view.ViewRootImpl$InputStage.onDeliverToNext(ViewRootImpl.java:4200)
System.err: 	at android.view.ViewRootImpl$InputStage.forward(ViewRootImpl.java:4166)
System.err: 	at android.view.ViewRootImpl$InputStage.apply(ViewRootImpl.java:4174)
System.err: 	at android.view.ViewRootImpl$InputStage.deliver(ViewRootImpl.java:4147)
System.err: 	at android.view.ViewRootImpl.deliverInputEvent(ViewRootImpl.java:6661)
System.err: 	at android.view.ViewRootImpl.doProcessInputEvents(ViewRootImpl.java:6635)
System.err: 	at android.view.ViewRootImpl.enqueueInputEvent(ViewRootImpl.java:6596)
System.err: 	at android.view.ViewRootImpl$WindowInputEventReceiver.onInputEvent(ViewRootImpl.java:6764)
System.err: 	at android.view.InputEventReceiver.dispatchInputEvent(InputEventReceiver.java:186)
System.err: 	at android.os.MessageQueue.nativePollOnce(Native Method)
System.err: 	at android.os.MessageQueue.next(MessageQueue.java:325)
System.err: 	at android.os.Looper.loop(Looper.java:142)
System.err: 	at android.app.ActivityThread.main(ActivityThread.java:6494)
System.err: 	at java.lang.reflect.Method.invoke(Native Method)
System.err: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:438)
System.err: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:807)
ActivityManager: Process com.brainworks.radlistview.bug.crash2 (pid 27154) has died: fore TOP 
ActivityManager: setHasOverlayUi called on unknown pid: 27154
