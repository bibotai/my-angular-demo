import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from './hero.service';
//switchMap运算符
import 'rxjs/add/operator/switchMap';

@Component({moduleId: module.id, selector: 'my-hero-detail', templateUrl: './hero-detail.component.html', styleUrls: ['./hero-detail.component.css']})
export class HeroDetailComponent implements OnInit {
  //注入ActivatedRoute和HeroService到构造函数中
  constructor(private heroService : HeroService, private route : ActivatedRoute, private location : Location) {}
  //使用@Input装饰器把属性声明称输入属性
  ngOnInit() : void {
    this
      .route
      .params
      .switchMap((params : Params) => this.heroService.getHero(+ params['id']))
      .subscribe(hero => this.hero = hero);
    // 注意switchMap运算符如何将可Observable的路由参数中的 id 映射到一个新的Observable，
    // 即HeroService.getHero方法的结果。 英雄的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+)
    // 操作符把路由参数的值转成数字。
  }
  //处理点击返回按钮和点击浏览器返回
  goBack() : void {
    this
      .location
      .back();
  }
  @Input()hero : Hero;
}