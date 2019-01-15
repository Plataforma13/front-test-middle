import { MetaGuard } from '@ngx-meta/core';
import { ChangeLanguageComponent } from '~/app/framework/i18n';

import { MainComponent } from './layout/main.component';
import { LoginComponent } from './login/login.component';

export const routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'PUBLIC.LOGIN.PAGE_TITLE'
      }
    }
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './+home/home.module#HomeModule'
      }
    ],
    canActivateChild: [MetaGuard],
    data: {
      i18n: {
        isRoot: true
      }
    }
  },
  {
    path: 'change-language/:languageCode',
    component: ChangeLanguageComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
