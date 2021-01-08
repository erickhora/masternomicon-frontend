import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NpcComponent } from './generators/npc/npc.component';

const routes: Routes = [
  //TODO: Adicionar uma pagina de PageNotFound
  { path: 'generators/npc', component: NpcComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
