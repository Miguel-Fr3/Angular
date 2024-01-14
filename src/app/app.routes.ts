import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgIfNgforComponent } from './ngIf-ngfor/ngIf-ngfor.component';
import { CrudComponent } from './componentes/crud/crud.component';


export const routes: Routes = [
    { path: 'primeiro', component: DataBindingComponent },
    { path: 'segundo', component: SegundoComponenteComponent },
    { path: 'teste', component: NgIfNgforComponent },
    { path: 'crud', component: CrudComponent }

];
