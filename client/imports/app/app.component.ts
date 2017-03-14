import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { IntroComponent as IntroPage } from '../pages/intro/intro.component';

import template from "./app.component.html";

@Component({
  template
})
export class AppComponent {
  rootPage: any;

  constructor(platform: Platform) {
    this.rootPage = IntroPage;

    platform.ready().then(() => {
      if (platform.is('cordova')) {
        StatusBar.styleDefault();
        Splashscreen.hide();
      }
    });
  }
}
