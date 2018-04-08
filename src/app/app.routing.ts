import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from "./welcome/welcome.component";
import { ExploreComponent } from "./explore/explore.component";
import { SearchComponent } from "./search/search.component";
import { CompareComponent } from "./compare/compare.component";

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'compare',
    component: CompareComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
