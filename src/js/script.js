
  var app = new Vue({
    el: '#root',
    data: {

        header:{
            title: "fine dinning experience",
            subtitle: "the best table in town",
            content: "Pellentsque vitae viverra risus, sagittis.Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
            textButton: "explore the menu"
          }
        ,
        navbar:[
          {
            nameItem: "home",
            active: true,
            icon: false,
            pathIcon: null,
            new: false
          },
          {
            nameItem: "culinary history",
            active: false,
            icon: false,
            pathIcon: null,
            new: false
          },
          {
            nameItem: "our team",
            active: false,
            icon: false,
            pathIcon: null,
            new: false
          },
          {
            nameItem: "our menu",
            active: false,
            icon: false,
            pathIcon: null,
            new: false
          },
          {
            nameItem: "takeout",
            active: false,
            icon: false,
            pathIcon: null,
            new: true
          },
          {
            nameItem: "bulletin",
            active: false,
            icon: false,
            pathIcon: null,
            new: false
          },
          {
           
            nameItem: "reservations",
            active: false,
            icon: false,
            pathIcon: null,
            new: false
          },
          {
            nameItem: "",
            active: false,
            icon: true,
            pathIcon: "fas fa-shopping-cart",
            new: false
          }
      
        ],
        news:[
          {
            title: 'the best cofee in town',
            pathBg: 'src/img/blog92x-400x458.jpg',
            author: 'Admin',
            category: "News",
            date: 'January 20th, 2020',
            iconPath: 'fas fa-link'
          },
          {
            title: 'discover our new menu',
            pathBg: 'src/img/blog72x-400x458.jpg',
            author: 'Admin',
            category: "News",
            date: 'January 20th, 2020',
            iconPath: 'fas fa-link'
          },
          {
            title: 'we now accept square!',
            pathBg: 'src/img/blog82x-400x458.jpg',
            author: 'Admin',
            category: "News",
            date: 'January 20th, 2020',
            iconPath: 'fas fa-link'
          }
        ],
        interSection: [
          {
            pathBg: "src/img/slider32x.jpg",
            title: "the best table in town",
            subTitle: "fine dining experience",
            content: "Pellentesque vitae viverra risus, sagittis.Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
            iconButton: false,
            iconPath: null,
            textButton: "explore the menu"
          },
          {
            pathBg: "src/img/slider72x-scaled.jpg",
            title: "takeout now avaible",
            subTitle: "enjoy your meal at home",
            content: "Pellentesque vitae viverra risus, sagittis.Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
            iconButton: true,
            iconPath: "fas fa-car",
            textButton: "view take out menu"
          }
        ],
        menus:[
          {
            name: "hors d'oeuvres",
            pathBg: "",
            dishs:[
              {
                name: "ahi salmon nigiri",
                description: "Eget vulputate vitae quid rutrum blandit sed. Quam nulla sit lacinia.",
                price: 48
              },
              {
                name: "umi masu salad",
                description: "Mollis ornare si sapient, sodales: Cursus duis proin sempre quisque.",
                price: 21
              },
              {
                name: "temaki with crab",
                description: "Ac vel ornare senectus placerat duis amet dictumst tellus.",
                price: 32
              },
              {
                name: "california rolls",
                description: "Ac vel, risum oenaRE senectus placerat duis ame dictumst tellus.",
                price: 22
              }
            ],
            main: false
          },
          {
            name: "main course",
            pathBg: "src/img/slider32x.jpg",
            dishs:[
              {
                name: "braised abalone",
                description: "Eget vulputate vitae quid rutrum blandit sed. Quam nulla sit lacinia.",
                price: 52
              },
              {
                name: "twice cooked pork",
                description: "Mollis ornare si sapient, sodales: Cursus duis proin sempre quisque.",
                price: 21
              },
              {
                name: "kung pao chicken",
                description: "Ac vel ornare senectus placerat duis amet dictumst tellus.",
                price: 32
              },
              {
                name: "char siu & sushi",
                description: "Ac vel, risum oenaRE senectus placerat duis ame dictumst tellus.",
                price: 48
              }
            ],
            main: true
          },
          {
            name: "desert",
            pathBg: "",
            dishs:[
              {
                name: "chocolate ball cake",
                description: "Eget vulputate vitae quid rutrum blandit sed. Quam nulla sit lacinia.",
                price: 13
              },
              {
                name: "lamie pie with crust",
                description: "Mollis ornare si sapient, sodales: Cursus duis proin sempre quisque.",
                price: 14
              },
              {
                name: "raspberry pear cake",
                description: "Ac vel ornare senectus placerat duis amet dictumst tellus.",
                price: 18
              },
              {
                name: "caffe' au lait",
                description: "Ac vel, risum oenaRE senectus placerat duis ame dictumst tellus.",
                price: 6
              }
            ],
            main: false
          }
        ],
        socials:[
          {
            iconPath:"fab fa-facebook"
          },
          {
            iconPath:"fab fa-twitter"
          },
          {
            iconPath:"fab fa-youtube"
          }, {
            iconPath:"fab fa-instagram"
          }
          , {
            iconPath:"fab fa-linkedin-in"
          }
        ],
        critics:[
          {
            author: "meggy stewart",
            newspaper: "new york times",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, soluta quidem numquam totam repellat ex facere harum veniam et sed omnis quaerat asperiores, maxime, aliquam fugit? Beatae repellendus illo ipsam.\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Anim libero asperiores laboriosam architecto ratione aliquam! Ipsum rerum nulla est?",
            vote: 5
          },      {
            author: "mary maxey",
            newspaper: "the guardian",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Anim libero asperiores laboriosam architecto ratione aliquam! Ipsum rerum nulla est?",
            vote: 5
          },      {
            author: "patrick monroe",
            newspaper: "globe and mail",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, soluta quidem numquam totam repellat ex facere harum veniam et sed omnis quaerat asperiores, maxime, aliquam fugit? Beatae repellendus illo ipsam.",
            vote: 5
          }
        ],
        dishOfDay:{},
        dropDown: false,
    },
    methods: {

        removeActiveFromMenuHeader(){
          this.navbar.forEach( (elem) => {
            if(elem.active){
              elem.active = false;
            }
          });
        },
        setDishOfDay(nMenu,nDish){
          this.dishOfDay = this.menus[nMenu].dishs[nDish];
        }
    },

    created(){
      this.setDishOfDay(1,0);
    }
  })
