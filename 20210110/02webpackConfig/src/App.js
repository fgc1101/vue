import imgSrc from './myGirl.jpg'


var App = {
    template:`
        <div>
        <h1>我是app的入口组件,我现在正在修改文件内容</h1>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
        <img :src="imagesUrl" alt="">
</ul>
</div>
    `,
    data(){
        return {
            list:['神雕侠侣','鹿鼎记','倚天屠龙记','射雕英雄传','雪山飞狐'],
            imagesUrl: imgSrc
        }
    }
}

export default App;
