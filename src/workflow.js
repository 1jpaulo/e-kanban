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
        var text = document.createTextNode("Lorem ipsum dolor.");
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
    }
};


function main(){

    // instancing workflow object
    var i_wfobj = new wfobj();
    // binding buttons
    var addtodo = document.querySelectorAll(".tools")[0];
    var adddoing = document.querySelectorAll(".tools")[1];
    var adddone = document.querySelectorAll(".tools")[2];
    
    addtodo.addEventListener("click", 
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
    );
}

window.onload = main;
