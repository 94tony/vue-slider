Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            photos:[
               {path: 'img/pianeta1.jpg ', personaggio:'img/logo2.png'},
               {path: 'img/pianeta2.jpg ', personaggio:'img/logo3.png'},
               {path: 'img/pianeta3.jpg ', personaggio:'img/logo4.jpg'},
               {path: 'img/pianeta4.jpg ', personaggio:'img/logo1.png'},
              
                
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
            },
            isCurrentDot: function(index){
                if(index===this.pictureIndex){
                    return 'current';
                }else{
                    return '';
                }
            }

        }


    }
)