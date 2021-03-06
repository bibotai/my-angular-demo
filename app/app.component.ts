import {Component} from '@angular/core';
@Component({
    selector: 'my-app', template: `
    <h1>{{title}}</h1>
    <!--导航-->
    <nav>
     <!--仪表盘-->
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <!--添加锚点标签-->
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    
    <!--添加路由插座-->
    <router-outlet></router-outlet>
  `,
    //styleUrls: ['./app.component.css']//这报错，不明原因！！！！！
    styles: [`h1 {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}

h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}

nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}

nav a:visited,
a:link {
  color: #607D8B;
}

nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}

nav a.active {
  color: #039be5;
}
`]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
