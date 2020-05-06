/**
 *  Copyright [2018] João Paulo Tinoco Alvarenga. 
 *  All Rights Reserved.
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.txt', which is part of this source code package.
 * 
 * This code maintain 
 */ 

/* 
    workflow object will handle the creation of new tasks 
    through its factory method createTask
 */
function wfobj(){}

wfobj.prototype = {

    createTask: ({title, description}) => ({
        title,
        description,
        timestamp: new Date()
    }),

    todo: {
        ntask: 0,
        tasks: []
    },

    doing: {
        ntask: 0,
        tasks: []
    },

    done: {
        ntask: 0,
        tasks: []
    },
    // this method will be called whenever a task is created
    // updating its origin board
    updateUI: function(board)
    {
        var node = document.createElement("DIV");
        node.classList.add("note");
        //this.modalWindow();
        var title = document.createTextNode(test_title[Math.floor((Math.random() * test_title.length))]);
        var description = document.createTextNode(test_description[Math.floor((Math.random() * test_description.length))]);
        var task = this.createTask({title, description});
        node.appendChild(title);
        node.appendChild(description);

        if(board === 'todo')
        {
            let todo = document.querySelectorAll(".board")[0];
            
            // update UI
            todo.appendChild(node);
            
            // computate state 
            this.todo.ntask++;
            this.todo.tasks.push(task);
        
        }else if(board === 'doing')
        {
            let doing = document.querySelectorAll(".board")[1];

            // update UI
            doing.appendChild(node);
            
            // computate state 
            this.doing.ntask++;
            this.doing.tasks.push(task);

        }else{

            let done = document.querySelectorAll(".board")[2];
            // update UI
            done.appendChild(node);
            
            // computate state 
            this.done.ntask++;
            this.done.tasks.push(task);
            
        }

        return 1;
    },

    modalWindow: function(){
        var input = document.createElement("input");
        input.classList.add("taskinput");
        input.type = "text";
        input.placeholder = "What you wanna do next?";

        var button = document.createElement("button");
        button.classList.add("addbutton");
        button.innerHTML = "Adicionar";
        button.onclick = '';
        var modal = document.createElement("DIV");
        modal.classList.add("modalwindow");
        modal.appendChild(input);
        modal.appendChild(button);

        var container = document.createElement("DIV");
        container.classList.add("modalcontainer");
        container.appendChild(modal);



        document.body.insertBefore(container, document.body.firstChild);
    }
};

var test_title = ['Fix issue #1 from XYZ', 'Fix issue #2 from XYZ', 'Fix issue #3 from XYZ']
var test_description = ['Try to fix issue #1 from XYZ', 'Try to fix issue #2 from XYZ', 'Try to fix issue #3 from XYZ']


function main(){

    // instancing workflow object
    var i_wfobj = new wfobj();
    // binding buttons
    var addTodo = document.querySelectorAll(".addTaskButton")[0];
    var addDoing = document.querySelectorAll(".addTaskButton")[1];
    var addDone = document.querySelectorAll(".addTaskButton")[2];
    
    addTodo.addEventListener("click", 
        function(event){
            //instance of wfobj
            i_wfobj.updateUI('todo');
        }
    );

    addDoing.addEventListener("click", 
        function(event){
            //instance of wfobj
            i_wfobj.updateUI('doing');
        }
    );

    addDone.addEventListener("click", 
        function(event){
            //instance of wfobj
            i_wfobj.updateUI('done');
        }
    );
}

window.onload = main;