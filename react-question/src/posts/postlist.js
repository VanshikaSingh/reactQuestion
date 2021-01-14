import React, {Component} from "react";


class Postlist extends Component{

async componentDidMount(){
    //fetching the json from the given url
    const givenUrl= "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(givenUrl);
    const data = await response.json();
   this.getData(data);

}
//function to fill the data from the variable data into the grid columns and rows using divs
 getData( data) {
    var appDiv=document.getElementById("list");
    var div=document.createElement('div');
    div.id = "grid-container";
    var st="<div id=\"grid-item\">Title</div><div id=\"grid-item\">Body</div>";
    //accessing all the title and body and storing them into rows
     for(var i in data)
     {
         console.log(data[i]);
       st+="<div id=\"grid-item\">"+data[i].title+"</div>"+"<div id=\"grid-item\">"+data[i].body+"</div>";
     }
     
     div.innerHTML=st;
     appDiv.appendChild(div);
    
}


    render(){
    return(
        <div id="list"></div>
    );
              
    }
}
export default Postlist