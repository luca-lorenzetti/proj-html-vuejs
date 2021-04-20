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
