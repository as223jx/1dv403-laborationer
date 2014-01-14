"use strict";

var Memory = {
    random: [],
    
    arr: [],
    
    open: [],
    
    rows: 2,
    cols: 4,
    
    rightCount: 0,
    
    turnCount: 0,
    
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
            
            if (pic.getAttribute("src") === "pics/0.png"){
                pic.setAttribute("src", Memory.arr[counter]);
                
                if(counter != Memory.open[0]){
                Memory.open.push(counter);
                
                console.log("Öppen 1: " + Memory.open[0]);
                console.log("Öppen 2: " + Memory.open[1]);
                
                    if(Memory.open.length === 2){
                        Memory.turnCount += 1;
                        
                        if(Memory.arr[Memory.open[0]] === Memory.arr[Memory.open[1]]){
                            console.log("Grattis!");
                            Memory.rightCount += 1;
                            console.log("BKILJA: " + Memory.rightCount);
                            
                            if (Memory.rightCount === (Memory.rows*Memory.cols)/2){
                                var finish = document.getElementById("finished");
                                var p = document.createElement("p");
                                p.innerHTML = ("Grattis! Du klarade det på " + Memory.turnCount + " drag.");
                                finish.appendChild(p);
                            }
                        }
                        else{
                            console.log("Feeeeel");
                            Memory.turn(Memory.open[0], Memory.open[1]);
                        }
                        console.log("tfgyuijo: " + Memory.turnCount);
                        Memory.open = [];
                    }
                }
            }
        };
        
        return varTd;
    },
    
    turn:function(picOne, picTwo){
        setTimeout(function() {
            document.getElementById(picOne).setAttribute("src", "pics/0.png");
            document.getElementById(picTwo).setAttribute("src", "pics/0.png");
        }, 500);

    },
    
    
};

window.onload = Memory.init;