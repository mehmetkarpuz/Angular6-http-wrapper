import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpWrapperService } from './httpwrapper.service';


@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [],
  providers: [HttpWrapperService]
})
export class HttpwrapperModule { }
