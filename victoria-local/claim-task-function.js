// https://stackoverflow.com/questions/1279957/how-to-move-an-element-into-another-element
// onclick = function(){ destination.appendChild(source); }


//onclick = function(){ task.appendChild(task-content); }

/*onclick = function changeclass() {

    var NAME = document.getElementsByClassName("request")
    
    NAME.className="task"
    
    } */
    var btn = document.getElementById('claim-btn') 

    btn.addEventListener(onclick, function changeClass(){
        console.log(click)
        document.getElementById("request").classList.add('task');

        document.getElementById("request").classList.remove('request');
    });

    /*document.getElementById('claim-btn').onclick = function changeClass() {
        
        document.getElementById("request").classList.add('task');

        document.getElementById("request").classList.remove('request');
    
    if ( document.getElementById("MyElement").classList.contains('MyClass') )
    
    document.getElementById("MyElement").classList.toggle('MyClass');
    }**/