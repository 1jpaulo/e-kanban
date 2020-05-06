/**
 *  Copyright [2018] João Paulo Tinoco Alvarenga. 
 *  All Rights Reserved.
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.txt', which is part of this source code package.
 * 
 * This code maintain 
 */ 

// workflow entire object
function wfobj(){}
wfobj.prototype = {
    todo: {
        // number of tasks in todo board
        ntask: 0,
        // union of all those tasks created in todo object
        tasks: []
    },

    doing: {
        // number of tasks in doing board
        ntask: 0,
        // union of all those tasks created in doing object
        tasks: []
    },

    done: {
        // number of tasks in done board
        ntask: 0,
        // union of all those tasks created in done object
        tasks: []
    },
    // this method will be called whenever a task be created
    // updating the respective board where that task was created
    updateUI: function(board)
    {
        var node = document.createElement("DIV");
        node.classList.add("note");
        this.modalWindow();
        var text = document.createTextNode(test_input[Math.floor((Math.random() * test_input.length))]);
        node.appendChild(text);

        if(board === 'todo')
        {
            let todo = document.querySelectorAll(".board")[0];
            todo.appendChild(node);
        }else if(board === 'doing')
        {
            let doing = document.querySelectorAll(".board")[1];
            doing.appendChild(node);

        }else if(board === 'done'){
            let done = document.querySelectorAll(".board")[2];
            done.appendChild(node)
        }else{
            return NULL;
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

var test_input = [
    'Project Documentation', 'Delete module b from /src', 'Debug Code', 
    'Recode hash function', 'Undo changes to working tree at commit 08b7d', 
    'Stretch window board in e-kanban', 'Search a better name for project', 
    'Writing Documentation', 'Insert Vertical Flexbox', 'Use align content', 
    'Configure http requests', 'Created subrotine resembling fibonacci function', 
    'Reduced noise in singularity function', 'Developing a new footer', 
    'Add copyright terms to footer', 'Add contacts info at the page', 
    'Publish page at github pages'
    ]

function main(){

    // instancing workflow object
    var i_wfobj = new wfobj();
    // binding buttons
    var addtodo = document.querySelectorAll(".tools")[0];
    var adddoing = document.querySelectorAll(".tools")[1];
    var adddone = document.querySelectorAll(".tools")[2];
    
    /*addtodo.addEventListener("click", 
        function(event){
            //instance of wfobj
            i_wfobj.updateUI('todo');
        }
    );

    adddoing.addEventListener("click", 
        function(event){
            //instance of wfobj
            i_wfobj.updateUI('doing');
        }
    );

    adddone.addEventListener("click", 
        function(event){
            //instance of wfobj
            i_wfobj.updateUI('done');
        }
    );*/
}

window.onload = main;

