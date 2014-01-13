"use strict";

var Memory = {
    random: [],
    
    arr: [],
    
    open: [],
    
    rows: 4,
    cols: 4,
    
    init:function(e){
        var newRandom = new RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
        var i;
        Memory.random.push(newRandom);
        
        
        for (i = 0; i < newRandom.length; i++){
            var picture = "pics/"+newRandom[i]+".png";
            Memory.arr.push(picture);
        }
        
        Memory.createTable(Memory.rows, Memory.cols);
    },
    
    createTable:function(rows, cols){
        var counter = 0;
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        
        var memoryDiv = document.getElementById("memoryDiv");
        
        memoryDiv.appendChild(table);
        
        for(var i = 0; i < rows; i+=1){
            var tr = document.createElement("tr");
            
            for(var j = 0; j < cols; j+=1){
                
                
                tr.appendChild(Memory.newTd(counter, memoryDiv));
                // var picTwo = document.createElement("img");
                // picTwo.setAttribute("src", Memory.arr[counter]);
                
                counter +=1;
            }
            
            tbody.appendChild(tr);
        }
        
        
    },
    
    newTd:function(counter, memoryDiv){
        var varTd = document.createElement("td");
        var pic = document.createElement("img");
        pic.setAttribute("src", "pics/0.png");
        pic.setAttribute("id", counter);
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        varTd.appendChild(a);
        a.appendChild(pic);
        
        a.onclick = function(){
            
            pic.setAttribute("src", Memory.arr[counter]);
            
            Memory.open.push(counter);
            
            console.log("Öppen 1: " + Memory.open[0]);
            console.log("Öppen 2: " + Memory.open[1]);
            
            if(Memory.open.length === 2){
                if(Memory.arr[Memory.open[0]] === Memory.arr[Memory.open[1]]){
                    console.log("Grattis!");
                    Memory.open = [];
                }
                else{
                    console.log("Feeeeel");
                    setTimeout(function() {
                        document.getElementById(Memory.open[0]).setAttribute("src", "pics/0.png");
                        document.getElementById(Memory.open[1]).setAttribute("src", "pics/0.png");                        
                    }, 500);

                    Memory.open = [];
                }
            }
        };
        
        return varTd;
    },
    
    
};

window.onload = Memory.init;