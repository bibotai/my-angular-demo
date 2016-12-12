import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//双向绑定，导入FormsModule模块
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

//导入HeroDetailComponent组件
import {HeroDetailComponent} from './hero-detail.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ], //把FormsModule添加到NgModule装饰器的imports数组中
  declarations: [
    AppComponent, HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}