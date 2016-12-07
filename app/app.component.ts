import { Component } from '@angular/core';

//创建英雄对象
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  // 更新@Component装饰器中指定的模板，为这些新属性建立数据绑定
  //label input组合可编辑英雄的名字
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" value="{{hero.name}}" placeholder="name">
  </div>
  `
})
//显示我们的英雄
export class AppComponent {
  title = 'Tour of Heroes';
  //以对象形式传递组件属性
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

// Hero 对象
// 此时此刻，我们的英雄只是一个名字。显然，它/她应该有更多属性。 让我们把hero从一个字符串字面量换成一个类。
//
// 创建一个Hero类，它具有id和name属性。 现在，把下列代码放在app.component.ts的顶部，仅次于 import 语句。=>1

// 现在，有了一个Hero类，我们把组件hero属性的类型换成Hero。 然后以1为 id、以 “Windstorm” 为名字，初始化它。
