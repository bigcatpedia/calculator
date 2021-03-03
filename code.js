var count = 1;
onEvent("BTN1", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "1");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "1");
  }
});
onEvent("BTN2", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "2");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "2");
  }
});
onEvent("BTN3", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "3");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "3");
  }
});
onEvent("BTN4", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "4");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "4");
  }
});
onEvent("BTN5", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "5");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "5");
  }
});
onEvent("BTN6", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "6");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "6");
  }
});
onEvent("BTN7", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "7");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "7");
  }
});
onEvent("BTN8", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "8");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "8");
  }
});
onEvent("BTN9", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "9");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "9");
  }
});
onEvent("BTN0", "click", function( ) {
  if (count == 1) {
    setNumber("DIGIT1", getText("DIGIT1") + "0");
  } else {
    setNumber("DIGIT2", getText("DIGIT2") + "0");
  }
});
onEvent("BTNADD", "click", function( ) {
  setText("OPERATORLBL", "+");
});
onEvent("BTNSUBSTRACT", "click", function( ) {
  setText("OPERATORLBL", "-");
});
onEvent("BTNMULTIPLY", "click", function( ) {
  setText("OPERATORLBL", "×");
});
onEvent("BTNDIVIDE", "click", function( ) {
  setText("OPERATORLBL", "÷");
});
onEvent("BTNARROW", "click", function( ) {
  count = 2;
});
onEvent("BTNCLEAR", "click", function( ) {
  setNumber("DIGIT1", "");
  setNumber("DIGIT2", "");
  setText("OPERATORLBL", "");
  setText("ANSWER", "");
  count = 1;
});
onEvent("BTNEQUAL", "click", function( ) {
  if (getText("OPERATORLBL") == "+") {
    setNumber("ANSWER", getNumber("DIGIT1") + getNumber("DIGIT2"));
  } else if ((getText("OPERATORLBL") == "-")) {
    setNumber("ANSWER", getNumber("DIGIT1") - getNumber("DIGIT2"));
  } else if ((getText("OPERATORLBL") == "×")) {
    setNumber("ANSWER", getNumber("DIGIT1") * getNumber("DIGIT2"));
  } else if ((getText("OPERATORLBL") == "÷")) {
    setNumber("ANSWER", getNumber("DIGIT1") / getNumber("DIGIT2"));
  }
});
