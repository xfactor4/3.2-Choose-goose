document.querySelector("#update-button").addEventListener('click', function() {

  var thimbles = Number(document.querySelector('#thimbles').value);
  var swords = Number(document.querySelector('#swords').value);

  var totalCost = thimbles + (swords * 37);

  if (totalCost === 1) {
    document.querySelector("#the-total").textContent = totalCost + "money.";
  } else {
    document.querySelector("#the-total").textContent = totalCost + "monies.";
  }

});
