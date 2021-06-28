Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            photos:[
                'img/pianeta1.jpg',
                'img/pianeta2.jpg',
                'img/pianeta3.jpg',
                'img/pianeta4.jpg',
                
            ],
            pictureIndex:0,
        },
        
        created(){
            setInterval(()=>{
                this.next();
            },3000)
        },

        methods: {
         
            next:function(){
                if(this.pictureIndex === (this.photos.length -1)){
                    this.pictureIndex = 0
                }
                this.pictureIndex++;
            },

            prev:function(){
                if(this.pictureIndex === 0){
                    this.pictureIndex = this.photos.length - 1 ;
                }else{
                this.pictureIndex--;
                }
            }

        },

    }
)