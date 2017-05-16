document.onload =  DeleteElements("ext_div");

var cursorX,cursorY;

document.onmousemove = function(e){ //Get the current mouse pointer position
  cursorX = e.clientX;
  cursorY = e.clientY;
};

var tagsToIdentify = ['img','a'];

document.body.onclick = function(e){
    var elem = clickOrigin(e);

    for (var i = 0; i < tagsToIdentify.length; i++){
        if ((elem.tagType == tagsToIdentify[i] && elem.parent == 'a') || (elem.tagType == tagsToIdentify[i])){//Image nested in an <a> OR simple <a>
            spawnButton(cursorX,cursorY);
        }

    }
};


/*FUNCTIONS*/

function clickOrigin(e){
    var target = e.target;
    var tag = [];
    tag.tagType = target.tagName.toLowerCase();
    tag.tagClass = target.className.split(' ');
    tag.id = target.id;
    tag.parent = target.parentNode.tagName.toLowerCase();

    return tag;
}

function spawnButton(x,y){


    var newbut = document.createElement("button"); //Insert a button (the X) in the HTML
    newbut.className= "ext_but";
    newbut.innerHTML = "X";
    document.body.appendChild(newbut);

    var offsetX = 5;   //Position the button near the pointer
    var offsetY = 5;
    newbut.style.left = (x + offsetX) +'px';
    newbut.style.top  = (y + offsetY) +'px';

    newbut.onclick = function(){
      window.stop(); //stop loading
      DeleteElements("ext_but");
    };

    setTimeout(function(){ //In case the button doesn't get clicked
      DeleteElements("ext_but");
    },800);

}

function DeleteElements(class_){
  var elements = document.getElementsByClassName(class_);

  while(elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
