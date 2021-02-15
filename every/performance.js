

//delate render comp
function D(count=10) {
  return {
    data() {
      return {
        showPriority:0
      }
    },

    mounted() {
      this.runShowPriority();
    },

    methods: {
      runShowPriority(){
        const step = () => {
          requestAnimationFrame(() => {
            this.showPriority++;
            if(this.showPriority < count) {
              step()
            }
          })
        }
        step();
      },
    },

    defer (priority) {
      return this.showPriority >= priority;
    }

  }
}


/**
 * Non-reactive data
 */

//  const data = items.map(item => ({
//    id: uid++,
//    data:item,
//    vote:0
//  }))

const data = items.map(item => optimizeItem(item))
function optimizeItem (item) {
   const itemData = {
     id: uid++,
     vote:0
   }

   Object.defineProperty(itemData,'data',{
      configurable:false,
      value:item
   })

   return itemData;
 }
 
/**
*  use the context of comp to save the data
*/
export default {
  created(){
    this.scroll = null;
  },
  mounted() {
    this.scroll = new MyScroll(this.$el)
  },
}

 