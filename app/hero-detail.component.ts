import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({selector: 'my-hero-detail', template: `
<!--将把所选英雄的详细信息显示在模板中-->
<!--使用*ngIf指令让详细信息在只有当有选中的英雄时才出现，否则会在页面加载时报错-->
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`})
export class HeroDetailComponent {
    //使用@Input装饰器把属性声明称输入属性
    @Input()
    hero : Hero;
}