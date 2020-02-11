function onMouseOver(x) {
  var elements = document.getElementsByClassName("selected-item");

  let classes = elements[0].className;
  classes = classes.replace("selected-item", "not-selected-item");
  elements[0].className = classes;

  elements = document.getElementsByClassName("list-clothes selected-item");
  classes = elements[0].className;
  classes = classes.replace("selected-item", "not-selected-item");
  elements[0].className = classes;

  classes = x.className;
  classes = classes.replace("not-selected-item", "selected-item")
  x.className = classes;

  let classesArr = classes.split(" ");

  elements = document.getElementsByClassName(classesArr[0] + " " + "list-clothes");
  classes = elements.item(0).className;

  classes = classes.replace("not-selected-item", "selected-item")
  elements.item(0).className = classes;
}