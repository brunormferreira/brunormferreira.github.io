import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(
      APP_ROUTES,
      withInMemoryScrolling({ anchorScrolling: 'enabled' }),
    ),
  ],
}).catch((err) => console.error(err));
