var App = {
    template:`
        <div>
        <h1>我是app的入口组件</h1>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
</ul>
</div>
    `,
    data(){
        return {
            list:['神雕侠侣','鹿鼎记','倚天屠龙记','射雕英雄传']
        }
    }
}

export default App;
