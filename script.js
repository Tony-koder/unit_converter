function unitConverter() {
  const myInput = document.querySelector("#myInputID").value;
  console.log(myInput);

  const fromValue = document.querySelector("#fromValueID").value;
  console.log(fromValue);

  const toValue = document.querySelector("#toValueID").value;
  console.log(toValue);

  const displayValue = document.querySelector("#displayValueID");
  console.log(displayValue);

  let result;

  if (fromValue === "cm" && toValue === "m") {
    result = myInput / 100;
  } else if (fromValue === "cm" && toValue === "km") {
    result = myInput / 100000;
  } else if (fromValue === "m" && toValue === "cm") {
    result = myInput * 100;
  } else if (fromValue === "m" && toValue === "km") {
    result = myInput / 1000;
  } else if (fromValue === "km" && toValue === "cm") {
    result = myInput * 100000;
  } else if (fromValue === "km" && toValue === "m") {
    result = myInput * 1000;
  }

  if (fromValue === "cm" && toValue === "cm") {
    alert("There's nothing to convert, dumb-dumb!");
  } else if (fromValue === "m" && toValue === "m") {
    alert("There's nothing to convert, dumb-dumb!");
  } else if (fromValue === "km" && toValue === "km") {
    alert("There's nothing to convert, dumb-dumb!");
  }

  displayValue.textContent = result.toFixed(3);
}
