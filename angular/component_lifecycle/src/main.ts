import { bootstrapApplication } from '@angular/platform-browser';
import { NgZone } from '@angular/core';
import { AppComponent } from './app/app.component';
import { LifecycleComponent } from './app/lifecycle/lifecycle.component';
bootstrapApplication(AppComponent).catch((err) => console.error(err));
 
// bootstrapApplication(AppComponent).catch((err) => console.error(err));

const appRefPromise = bootstrapApplication(AppComponent);
const lifecycleRef = bootstrapApplication(LifecycleComponent)
 
 
export function unmountApp() {
  appRefPromise.then(appRef => {
    const zone = appRef.injector.get(NgZone);
    zone.run(() => {
      appRef.destroy()
    });
  });
  lifecycleRef.then(appRef => {
    const zone = appRef.injector.get(NgZone);
    zone.run(() => {
      appRef.destroy()
  });})
}
 
/*
Browser handles clean up by them if tab is closed
*/
 
setTimeout(()=>{
    unmountApp()
},5000)