import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//双向绑定，导入FormsModule模块
import {FormsModule} from '@angular/forms';

//注册HTTP模块
import {HttpModule} from '@angular/http';
// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';

//导入HeroDetailComponent组件
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';

import {HeroService} from './hero.service';
//添加仪表盘
import {DashboardComponent} from './dashboard.component';
//导入路由模块
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)
  ], //把FormsModule添加到NgModule装饰器的imports数组中
  declarations: [
    AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent
  ],
  bootstrap: [AppComponent],
  // 添加HeroService到AppModule的providers数组中，因为我们的每一个视图都需要它。
  providers: [HeroService]
})

export class AppModule {}