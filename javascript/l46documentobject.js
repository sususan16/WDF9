let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links;//HTMLCollection
val = document.links[0];
val = document.links[3]; //<a href="#" id="delete-item4" class="delete-item"...</a>
val = document.links[3].id; //delete-item4
val = document.links[5].id; //clearall

// val = document.links[3].class; //undefined

val = document.links[3].className; //delete-item
val = document.links[3].classList; //DOMTokenList
val = document.links[3].classList[0]; //delete-item
val = document.links[3].classList[1]; //my-item


val = document.forms; //HTMLCollection
val = document.forms[0];
val = document.forms[0].id; //form
val = document.forms[0].className;
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action; //file:///D:/WDF9/l46documentobject.html
val = document.forms[0].method; //get

// val = document.images; //HTMLCollection
// val = document.images[0];
// val = document.images[0].id;
// val = document.images[0].className;
// val = document.images[0].classList; //DOMTokenList
// val = document.images[0].classList[0];
// val = document.images[0].src;
// val = document.images[0].alt;


val = document.scripts; //HTMLCollection
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;

		        
// console.log(val);
// -------------------------------------------------------------

//=> Change Styling

document.getElementById('tasktitle').style.backgroundColor = "green";
document.getElementById('tasktitle').style.color = "#fff";
document.getElementById('tasktitle').style.padding = "5px";

//=> Change Content
document.getElementById('tasktitle').textContent = "My List";
document.getElementById('tasktitle').innerText = "My Tasks";
document.getElementById('tasktitle').innerHTML = "<span style='color:yellow;'>My Jobs</span>";


//=> Call by Class Name

const lis = document.getElementsByClassName('list-group-item'); //HTMLCollection
console.log(lis);
console.log(lis[2]);
// lis[2].style.color = "blue";
// lis[2].textContent = "Have to visit";
// lis[2].innerText = "Have to cock";
// lis[2].innerHTML = 'Have to read<a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>'

//=> Call by Tag (call elements)

const litags = document.getElementsByTagName('li'); //HTMLCollection
console.log(litags);
console.log(litags[3]);
// litags[3].style.color = "red";
// litags[3].innerHTML = 'Have to cook<a href="#" id="delete-item4" class="delete-item my-item" ><i class="fas fa-trash-alt"></i></a>';

//=> Query Selector

console.log(document.querySelector('#tasktitle'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h3'));

console.log(document.querySelector('li')); //only the first li
console.log(document.querySelector('.list-group-item')); //only the first li

// document.querySelector('li').style.color = "blue";
// document.querySelector('ul li').style.color = "violet";
// document.querySelector('ul li:nth-child(odd)').style.backgroundColor = "silver";
// document.querySelector('ul li:nth-child(even)').style.backgroundColor = "silver";
// document.querySelector('ul li:last-child').style.backgroundColor = "silver";
// document.querySelector('ul li:last-of-type').style.backgroundColor = "silver";
// document.querySelector('ul li:nth-of-type(4)').style.backgroundColor = "silver";


//=> Query Selector All

console.log(document.querySelectorAll('#tasktitle')); //NodeList
console.log(document.querySelectorAll('#tasktitle')[0]);

console.log(document.querySelectorAll('li')); //NodeList
console.log(document.querySelectorAll('.list-group-item')); //NodeList

const itms = document.querySelectorAll('li');
console.log(itms); //NodeList
console.log(itms[1]);


const listitems = document.querySelector('ul').getElementsByClassName('list-group-item'); //HTMLCollection
console.log(listitems);
console.log(typeof listitems);
console.log(listitems[1]);


const arritems = Array.from(listitems);
console.log(arritems);

// arritems.forEach(function(arritem,idx){
          // console.log(arritem);
	      // arritem.textContent = "Hello";

	      // arritem.textContent = `${idx} = Hello`;

	// arritem.textContent = `${++idx} = Hello`;

// });

const listitms = document.querySelectorAll('ul.list-group li.list-group-item'); //NodeList
console.log(listitms);
console.log(typeof listitms);
console.log(listitms[4]);


// listitms.forEach(function(listitm,idx){
       // console.log(listitm);

	 // listitm.innerText = `Hello World`;
	// listitm.innerText = `${++idx} = Hello World`;
// });

const lisodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(lisodds);
const lisevens = document.querySelectorAll('li:nth-child(even)');
// console.log(lisevens);

lisodds.forEach(function(lisodd){
       lisodd.style.backgroundColor = "gray";
});

// lisevens.forEach(function(liseven){
//       liseven.style.backgroundColor = "orange";
// });

for(let i = 0;i < lisevens.length;i++){
       // console.log(i); //0 1
	  lisevens[i].style.backgroundColor = "silver";
};


//=> Children

var getli = document.querySelector('ul li');
    getli = document.querySelector('li.list-group-item');
    getli = document.querySelector('li.list-group-item:first-child');
console.log(getli);

let chl;
const getul = document.querySelector('ul.list-group');
console.log(getul);

chl = getul.children; //HTMLCollection
console.log(chl);
console.log(chl[2]);

// chl[1].textContent = "Have to go";
getul.children[3].innerText = "Have to cook";
chl[4].innerHTML = 'Have to read <a href="#" id="delete-item5" class="delete-item"><i class="fas fa-trash-alt"></i></a>';


//=>Parent to Children to Children

chl = getul.children; //HTMLCollection
chl = getul.children[0];
chl = getul.children[0].children; //HTMLCollection
      //ul     li             a
chl = getul.children[0].children[0];
chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList;
chl = getul.children[0].children[0].classList[0];
chl = getul.children[0].children[0].href;

chl = getul.children[0].children[0].children; //HTMLCollection
    //  ul      li           a         i
chl = getul.children[0].children[0].children[0];
console.log(chl);

// => Child Element Count
chl = getul.children.length; //5
chl = getul.childElementCount; //5

chl = getul.children[0].childElementCount; //1
chl = getul.children[0].children[0].childElementCount; //1
console.log(chl);


// => Child to Parent

const getfirstli = document.querySelector('li.list-group-item:first-child');
// console.log(getfirstli);
             //      li          ul
let getparent = getfirstli.parentElement;
    getparent = getfirstli.parentElement.parentElement;
             //      li          ul      div.cardaction div.card
    getparent = getfirstli.parentElement.parentElement.parentElement;
console.log(getparent);


//=> Next Element Sibling

let getsibling = getfirstli;
               // list item 1  list item 2
    getsibling = getfirstli.nextElementSibling;
               // list item 1  list item 2      list item 3
    getsibling = getfirstli.nextElementSibling.nextElementSibling;
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
               // list item 1  list item 2     list item 3         list item 4         list item 5       null
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(getsibling);


//=> Previous Element Sibling
         // list item 1     list item 2        list item 3        list item 2
getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(getsibling);



// => Create Element

const newli = document.createElement('li');

// Add ID
newli.id = "new-item";

// Add Class
newli.className = "list-group-item";
newli.className = "delete-me";
newli.className = "list-group-item delete-me";

newli.classList.add("delete-i");
newli.classList.add("delete-you");
newli.classList.add("delete-we","delete-your","delete-us");

// Add Attribute
// setAttribute(qualified name,value);
newli.setAttribute('title','newitem');

// newli.textContent = "hay";
// newli.innerText = "hi";
// newli.innerHTML = 'list item 6 <a href="#" id="delete-item6" class="delete-item"><i class="fas fa-trash-alt"></i></a>';


// const newtext = document.createTextNode("Hello World");
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode("Hello Thailand"));
console.log(newli);

const newlink = document.createElement('a');

// Add href
newlink.href = "#";

// Add ID
newlink.id = "delete-item6";

// Add Class
// newlink.className = "delete-item";
newlink.classList.add('delete-item');
// console.log(newlink);

const newitalic = document.createElement('i');
// newitalic.className = "fas fa-trash-alt";
newitalic.classList.add('fas','fa-trash-alt');
// console.log(newitalic);

newlink.appendChild(newitalic);
console.log(newlink);

newli.appendChild(newlink);
console.log(newli);

document.querySelector('ul.list-group').appendChild(newli);


// => Replace Element
// replaceChild(new,old);

const newtitleh2 = document.createElement('h2');
newtitleh2.id = "tasktitle";

const newcaption = document.createTextNode('All My Lists');
newtitleh2.appendChild(newcaption);
// console.log(newtitleh2);

const oldtitleh4 = document.getElementById('tasktitle');
// console.log(oldtitleh4);

const getcardaction = document.querySelector('.card-action');
getcardaction.replaceChild(newtitleh2,oldtitleh4);



// const newestli = document.createElement('li');
// newestli.textContent = "Hello Thailand";
// const newtxt = document.createTextNode("Hello Myanmar");
// newestli.appendChild(newtxt);
// console.log(newestli);


// => Remove  Element (Self)

const getlis = document.querySelectorAll('li'); //Node List
// console.log(getlis); //6
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[3].remove();

// console.log(getlis); //6



// => Remove Child Element

const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// getfirstul.remove();

// getfirstul.removeChild(getfirstul.children[0]);
// getfirstul.removeChild(getlis[5])
// getfirstul.removeChild(getlis[1]);


// => Attribute

const firstli = document.querySelector('li');
// console.log(firstli);
const firstlichild = firstli.children[0];
console.log(firstlichild);
// console.log(firstlichild.id);
console.log(firstlichild.href); //route/#
console.log(firstlichild.getAttribute('href')); //#
console.log(firstlichild.getAttribute('id'));
console.log(firstlichild.title); //iamtitle
console.log(firstlichild.alt); //undefined
console.log(firstlichild.getAttribute('alt')); //iamalt

// firstlichild.href = "https://google.com";
// firstlichild.setAttribute('href','https://linkedin.com');

var hasatt = firstlichild.hasAttribute('href');
console.log(hasatt); //true
hasatt = firstlichild.hasAttribute('hay');
console.log(hasatt); //false


// => className      vs classList

// console.log(firstlichild.className); //delete-item
// firstlichild.className = "delete-myself";
// firstlichild.className = "delete-item delete-myself";
// firstlichild.className = "delete-item delete-myself delete-ourselves";
// console.log(firstlichild.className);

// console.log(firstlichild.classList); //DOMTokenList
// console.log(firstlichild.classList[0]); //delete-item
// console.log(firstlichild.classList[1]); //undefined

firstlichild.classList.add('delete-myself');
firstlichild.classList.add('delete-ourselves');
console.log(firstlichild.classList);

// firstlichild.classList.remove('delete-myself');
// firstlichild.classList.remove('delete-item');
// firstlichild.classList.remove('delete-item','delete-ourselves');

// console.log(firstlichild.classList);



// => Check Class Value

console.log(firstlichild.className); //delete-item delete-myself delete-ourselves
if(firstlichild.className === "delete-item delete-myself delete-ourselves"){
     console.log("Yes");
}else{
     console.log("No");
}


console.log(firstlichild.classList); //DOMTokenList(3)

if(firstlichild.classList.contains('delete-myself')){
    console.log("Yes")
}else{
    console.log("No");
}



// Method 1
// => addEventListener('eventtype',callfunction());

const clearbtn = document.querySelector('.clear-tasks');

// clearbtn.addEventListener('click',function(e){
    // console.log("hay i am working");

    // console.log(clearbtn);

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // console.log(this); //if you want direct element !!just use by regular function
// });


// Method 2

clearbtn.addEventListener('click',myclick);

function myclick(e){
      // console.log("hay i am working");

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList[0]);

    // console.log(this);

    // e.target.innerText = "Finished";

    // console.log(e);

    // Coordinate Event - relative to the window
    // const clientx = e.clientX;
    // const clienty = e.clientY;
    // console.log(clientx,clienty);

    // Coordinate Event - relative to the element
    // const offsetx = e.offsetX;
    // const offsety = e.offsetY;
    // console.log(offsetx,offsety);

    e.preventDefault();
}



// => Mouse Event

const clbtn = document.querySelector('.clear-tasks');

// Single Click
// clbtn.addEventListener('click',mouseeventtype);

// Double Click
// clbtn.addEventListener('dblclick',mouseeventtype);

//mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

//mouseup
// clbtn.addEventListener('mouseup',mouseeventtype);

const card = document.querySelector('.card');

// mouse enter
// card.addEventListener('mouseenter',mouseeventtype);

// mouse over (action to each child while mouse over)
// card.addEventListener('mouseover',mouseeventtype);

// mouse leave
// card.addEventListener('mouseleave',mouseeventtype);

// mouse out (action to each child while mouse leave)
// card.addEventListener('mouseout',mouseeventtype);

// mouse move
card.addEventListener('mousemove',mouseeventtype);

const headingh2 = document.querySelector('h2');

function mouseeventtype(e){
    // console.log('i am working');

    // console.log(`Event Type = ${e.type}`);

    // headingh2.textContent = `MouseX : ${e.clientX} Mouse Y : ${e.clientY}`;
    headingh2.textContent = `MouseX : ${e.offsetX} Mouse Y : ${e.offsetY}`;

    // document.body.style.backgroundColor = `rgba(${e.clientX},${e.clientY},${e.clientX},0.5)`;
    document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},0.5)`;

      
    
}

// submit

// const getform = document.querySelector('form');

// getform.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
//       console.log(`Event Type = ${e.type}`);

//       e.preventDefault();
// }




// => Input Event

const getinput = document.querySelector('#task');

// keydown
// getinput.addEventListener('keydown',inputeventtype);

// keypress
// getinput.addEventListener('keypress',inputeventtype);

// keyup
// getinput.addEventListener('keyup',inputeventtype);

// input
// getinput.addEventListener('input',inputeventtype);

// focus
// getinput.addEventListener('focus',inputeventtype);

// blur
// getinput.addEventListener('blur',inputeventtype);

// cut (clt+x)
// getinput.addEventListener('cut',inputeventtype);

// paste (clt+v)
// getinput.addEventListener('paste',inputeventtype);

function inputeventtype(e){
    console.log(`Event Type = ${e.type}`);

    // console.log(getinput);

    // console.log(e);
    // console.log(e.target);
    // console.log(this); // this works with regular function

    // console.log(e.target.value);
    // console.log(this.value);
    console.log(getinput.value);
}


// => Event Bubbling

// document.querySelector('.card-title').addEventListener('click',function(){
//       console.log('i am card-title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//      console.log('i am card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
//     console.log('i am card');
// });




// => Event Delegation (Exact element)

// const getdeleteitem = document.querySelector('.delete-item');
// console.log(getdeleteitem);

// getdeleteitem.addEventListener('click',function(e){
     // console.log("i am delete item");

    // console.log(e.target); // i tag

    // console.log(this); // a tag (this means itself , getdeleteitem, a tag)
// });

document.body.addEventListener('click',eventdeleg);

function eventdeleg(e){
    // console.log('i am working');

    // console.log(e.target);
    // console.log(this);

    // console.log(e.target.className);

         // i 
    // if(e.target.className === "fas fa-trash-alt"){
        // console.log('hay i am trash can');
    // }


    // console.log(e.target.parentElement);
    // console.log(e.target.parentElement.className);

         // i         a
    // if(e.target.parentElement.className === "delete-item"){
    //    console.log('hay i am delete item by a tag'); // className works with exact one

    // }

           // i          a
    // if(e.target.parentElement.classList.contains('delete-item')){
    //    console.log('hay i am delete item by a tag');
    // }

          // i      a
    if(e.target.parentElement.classList.contains('delete-item')){
          // console.log('hay i am delete item by a tag');

          // i
        // e.target.remove();

             // i        a
        // e.target.parentElement.remove();

            // i         a            li
        e.target.parentElement.parentElement.remove();

    }


}


document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();


    // console.log('hay i am working');

    const getnewtask = document.getElementById('task').value;
    // console.log(getnewtask);

    // localStorage.setItem('mytasks',getnewtask); //Don't fucking open this comment or u'll surely feel like dying!

    let alltasks;
    
    if(localStorage.getItem('mytasks') === null){
        // console.log('Not value yet');
         alltasks = [];
        
    }else{
        console.log('Value already exists');

        alltasks = localStorage.getItem('mytasks');
        console.log(alltasks);
        // console.log(typeof alltasks); //string

        alltasks = JSON.parse(localStorage.getItem('mytasks'));
        console.log(alltasks);
        
    }

    alltasks.push(getnewtask);

    console.log(alltasks);

    localStorage.setItem('mytasks',JSON.stringify(alltasks));

    // e.preventDefault();
});


// console.log(localStorage.getItem('mytasks'));
// console.log(typeof localStorage.getItem('mytasks'));

// console.log(JSON.parse(localStorage.getItem('mytasks')));
// console.log(typeof JSON.parse(localStorage.getItem('mytasks')));

const getmytasks = JSON.parse(localStorage.getItem('mytasks'));

getmytasks.forEach(function(getmytask){
           console.log(getmytask);
});







    

    









 




























// Note::
// HTMLCollection cannot be looped directly(forEach).If we want to loop , use Array.from() to change it pure array!
// NodeList can be looped directly(forEach)!
// removeChild(), eg.parent.removeChild(child[0]) , cannot call parent in removeChild()!













