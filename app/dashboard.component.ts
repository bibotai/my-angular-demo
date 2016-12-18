//仪表盘
import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    moduleId: module.id, selector: 'my-dashboard',
    //指向一个模板文件
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(private heroService : HeroService) {}
    heroes : Hero[];

    //添加一个从heroService服务中获取英雄的方法 基于承诺 并承诺事情解决再行动
    getHeroes() : void {
        // this.heroes = this   .heroService   .getHeroes();
        this
            .heroService
            .getHeroesSlowly()
            .then(heroes => this.heroes = heroes.slice(1, 5)) //提取2、3、4、5英雄
    }
    //实现OnInit接口获取英雄数据
    ngOnInit() : void {
        this.getHeroes();
    }
}