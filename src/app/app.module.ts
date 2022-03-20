import { components, imports, providers, bootstrap } from './declarations';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: components,
  imports: imports,
  providers: providers,
  bootstrap: bootstrap,
})
export class AppModule {}
