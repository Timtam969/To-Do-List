function newItem(){

//javascript
//1. Adding a new item to the list of items:
   let a = $('<li></li>');
   let b = $('#input').val();
   a.append(b);
  let c = $('#list');

   if (b === '') {
     alert("You must write something!");
   } else {
     c.append(a);
     $('#input').val('');
   }

 //2. Crossing out an item from the list of items:
   a.on("dblclick", function() {
 		a.addClass("strike");
 	})


 //3(i). Adding the delete button "X":
  let d = $('<crossOutButton></crossOutButton>');
  d.append(document.createTextNode('X'));
  a.append(d);

 d.on("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		a.addClass("delete");
 	}
 // 4. Reordering the items:
   c.sortable();
}
