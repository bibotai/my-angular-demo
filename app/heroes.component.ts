import {Component} from '@angular/core';
import {Hero} from './hero';
//引入路由
import {RouterModule, Router} from '@angular/router';
//引入HeroService服务
import {HeroService} from './hero.service';
//引入OnInit接口
import {OnInit} from '@angular/core';

@Component({
  moduleId: module.id, selector: 'my-heroes',
  // 更新@Component装饰器中指定的模板，为这些新属性建立数据绑定 label input组合可编辑英雄的名字
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'] //这货竟然是一个数组！！！！
  // 在Component中创建注入提供商  providers数组告诉
  // Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例。
  // 在分离herocomponent时移除并提升到根NgModule中 providers: [HeroService] 显示我们的英雄
})
export class HeroesComponent implements OnInit {
  // 注入HeroService 1、添加一个构造函数，并定义一个私有属性 2、添加组件的providers元数据
  constructor(private heroService : HeroService, private router : Router) {}

  title = 'Tour of Heroes';
  // 暴露英雄 我们在AppComponent上创建一个公共属性，用来暴露这些英雄，以供绑定。
  // 我们并不需要明确定义heroes属性的数据类型，TypeScript 能从HEROES数组中推断出来。
  heroes : Hero[];
  // 暴露选中的英雄
  selectedHero : Hero;

  //添加一个从heroService服务中获取英雄的方法 基于承诺 并承诺事情解决再行动
  getHeroes() : void {
    // this.heroes = this   .heroService   .getHeroes();
    this
      .heroService
      .getHeroesSlowly()
      .then(heroes => this.heroes = heroes)
  }
  //实现OnInit接口获取英雄数据
  ngOnInit() : void {
    this.getHeroes();
  }
  //添加一个onSelect方法，用于将用户点击的英雄赋给selectedHero属性
  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }
  //添加gotoDetail方法导航到详细页
  gotoDetail() : void {
    this
      .router
      .navigate(['/detail', this.selectedHero.id]);
  }

}