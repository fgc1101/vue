var vm = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id:1,
                name:'射雕英雄传',
                date:'2020-10',
                price: 500,
                count:1,
            },{
                id:2,
                name:'神雕侠侣',
                date:'2020-10',
                price: 300,
                count:1,
            }
        ],
    },
    methods:{
        add:function(index){
            console.log(index)
            this.books[index].count++
        },
        dcre: function(index){
            console.log(index)
            this.books[index].count--
        },
        removeTitles:function(index){
            this.books.splice(index,1)
        },
    },
    filters:{
        getFinalPrice:function(price){
            return "$" + price.toFixed(2);
        }
    },
    computed:{
        totalPrice:function(){
            let totalPrice = 0;
            for(let i = 0;i<this.books.length;i++){
                totalPrice += this.books[i].price * this.books[i].count;
            }

            return totalPrice;
        }
    }
});
