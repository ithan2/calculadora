function insert(num)
{
    var numero = document.getElementById('resu').innerHTML;
    document.getElementById('resu').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resu').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('Resu').innerHTML;
    document.getElementById('resu').innerHTML = resultado.substring(0,resu -1)
}