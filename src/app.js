import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      toDoList: [
        {action: "Sort out contents insurance", priority: "high", doneStatus: true },
        {action: "Write Christmas cards", priority: "medium", doneStatus: false},
        {action: "Get new van wheel", priority: "high", doneStatus: false}
      ],
      newListItem: ""
    },

    methods: {
      createNewListItem: function(){
        let itemObject = {action: this.newListItemAction,
          priority: this.newListItemPriority,
          doneStatus: false
        }
        this.toDoList.push(itemObject)
        this.newListItem = ""
      },

      statusNotDone: function(index){
        this.toDoList[index].doneStatus = true
      },

      statusDone: function(index){
        this.toDoList[index].doneStatus = false
      }




    }
  });
})
