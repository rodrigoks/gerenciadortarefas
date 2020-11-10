import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TAREFA_ROUTES } from './tarefas/tarefas-routing.module';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TAREFA_ROUTES
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}