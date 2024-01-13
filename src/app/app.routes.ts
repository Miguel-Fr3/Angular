import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';


export const routes: Routes = [
    { path: 'primeiro', component: DataBindingComponent },
    { path: 'segundo', component: SegundoComponenteComponent }

];
