  var app = new Vue({
    el: '#root',
    data: {

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
            title: "the best table in town",
            subTitle: "enjoy your meal at home",
            content: "Pellentesque vitae viverra risus, sagittis.Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.",
            iconButton: true,
            iconPath: "fas fa-car",
            textButton: "view take out menu"
          }
        ]
    },
    methods: {

        removeActiveFromMenuHeader(){
          this.navbar.forEach( (elem) => {
            if(elem.active){
              elem.active = false;
            }
          });
        }
    },

  })
