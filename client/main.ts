import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MeteorObservable } from 'meteor-rxjs';
import { AppModule } from './imports/app/app.module';

Meteor.startup(() => {
  const subscription = MeteorObservable.autorun().subscribe(() => {
    setTimeout(() => subscription.unsubscribe());
    platformBrowserDynamic().bootstrapModule(AppModule);
  });
});
