// On ajoute la fonction nommée dans le onclick pour l'activer lors du clic
// Le calcul que nous voulons faire est décrit dans le alert
function compute()
{
  let nbr1 = firstNumber.value
  let nbr2 = secondNumber.value
  alert(Math.trunc(nbr1) * (nbr2))
}
