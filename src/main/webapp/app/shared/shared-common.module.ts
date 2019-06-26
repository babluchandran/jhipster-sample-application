import { NgModule } from '@angular/core';

import { SampleJhipsterApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SampleJhipsterApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SampleJhipsterApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SampleJhipsterApplicationSharedCommonModule {}
