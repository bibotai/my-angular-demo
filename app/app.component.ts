import {Component} from '@angular/core';
import {Hero} from './hero';

//引入HeroService服务
import {HeroService} from './hero.service';
//引入OnInit接口
import {OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  // 更新@Component装饰器中指定的模板，为这些新属性建立数据绑定 label input组合可编辑英雄的名字
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    
    <!-- each hero goes here -->
    <!-- 添加内置指令来遍历英雄并显示在页面中 -->
    <!-- 并在此添加click事件绑定 -->
    <!-- 添加属性绑定：[class.selected]="hero === selectedHero" -->
    <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero"
 (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
    <!-- 把该组件的selectedHero属性绑定到HeroDetailComponent组件的hero属性上 -->
    <!--hero是属性绑定的目标 它位于等号 (=) 左边方括号中-->
    <!--Angular 希望我们把目标属性声明为组件的输入属性，否则，Angular 会拒绝绑定，并抛出错误。-->
    <!--因此需要在hero-hero-detail.component.ts中使用@Input装饰器把属性声明称输入属性-->
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>


  `,
  // ngIf和ngFor被称为“结构型指令”，因为它们可以修改部分 DOM 的结构。 换句话说，它们让 Angular 在 DOM 中显示内容的方式结构化了。
  // 样式：这些样式只会作用于AppComponent组件，而不会“泄露”到外部 HTML 中
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  // 在Component中创建注入提供商  providers数组告诉
  // Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例。
  providers: [HeroService]

})

//显示我们的英雄
export class AppComponent implements OnInit {
  // 注入HeroService 1、添加一个构造函数，并定义一个私有属性 2、添加组件的providers元数据
  constructor(private heroService : HeroService) {}

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

}
