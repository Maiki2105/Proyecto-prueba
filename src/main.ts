import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/welcome/components/titulo/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
