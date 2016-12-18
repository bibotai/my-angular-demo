// 服务的命名规则： 服务名称的小写形式（基本名），加上.service后缀。 如果服务名称包含多个单词，我们就把基本名部分写成中线形式
// (dash-case)。
// 例如，SpecialSuperHeroService服务应该被定义在special-super-hero.service.ts文件中
import {Injectable} from '@angular/core';
// 导入Hero常量
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
// 可注入的服务 我们导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数
@Injectable()
export class HeroService {
    // 添加一个getHeros的方法 返回承诺
    getHeroes() : Promise < Hero[] > {
        return Promise.resolve(HEROES);
    } // stub
    //模拟网络延迟
    getHeroesSlowly() : Promise < Hero[] > {
        return new Promise < Hero[] > (resolve => setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
    getHero(id : number) : Promise < Hero > {
        return Promise.resolve(HEROES.find(hero => hero.id == id));
    }
}