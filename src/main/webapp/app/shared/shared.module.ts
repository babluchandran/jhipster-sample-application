import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SampleJhipsterApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SampleJhipsterApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SampleJhipsterApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleJhipsterApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: SampleJhipsterApplicationSharedModule
    };
  }
}
