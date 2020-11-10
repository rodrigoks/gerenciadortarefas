import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar/listar-tarefa.component';

export const TAREFA_ROUTES: Routes = [
    {
        path:  'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    }
]