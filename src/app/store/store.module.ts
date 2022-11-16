import { NgModule } from '@angular/core';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { projectsReducer } from './projects/reducer';
import { ProjectsEffects } from './projects/effects';

const APP_EFFECTS = [ProjectsEffects];

const APP_REDUCERS = {
  projects: projectsReducer,
};

@NgModule({
  imports: [
    EffectsModule.forRoot(APP_EFFECTS),
    StoreModule.forRoot(APP_REDUCERS),
    // StoreDevtoolsModule.instrument(),
  ],
})
export class AppStoreModule {}
