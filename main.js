// On ajoute la fonction nommée dans le onclick pour l'activer lors du clic
// Le calcul que nous voulons faire est décrit dans le alert
function compute()
{
  let nbr1 = document.getElementById('firstNumber').value;
  let nbr2 = document.getElementById('secondNumber').value;
  alert(Math.trunc(nbr1) * (nbr2));
}
// Le trunc permet de dire "ne prends pas en compte le nombre après la virgule du premier champs"
// C'est une méthode de l'objet Math
