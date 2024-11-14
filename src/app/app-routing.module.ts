import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    data : {
      isHeader : 1,
      isSidebar: 1
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    data : {
      isHeader : 0,
      isSidebar: 0
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    data : {
      isHeader : 1,
      isSidebar: 1
    }
  },
  {
    path: 'pca',
    loadChildren: () => import('./pages/pca/pca.module').then(m => m.PcaModule),
    data : {
      isHeader : 1,
      isSidebar: 1
    }
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule),
    data : {
      isHeader : 1,
      isSidebar: 1
    }
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients.module').then(m => m.ClientsModule),
    data : {
      isHeader : 1,
      isSidebar: 1
    }
  },
  {
    path: 'calender',
    loadChildren: () => import('./pages/calender/calender.module').then(m => m.CalenderModule),
    data : {
      isHeader : 1,
      isSidebar: 1
    }
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsModule),
    data : {
      isHeader : 1,
      isSidebar: 1
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
