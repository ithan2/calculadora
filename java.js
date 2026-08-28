var limparTela = false;

function insert(num)
{
    if (limparTela == true)
    {
        document.getElementById('resu').innerHTML = "";
        limparTela = false;
    }

    var numero = document.getElementById('resu').innerHTML;
    document.getElementById('resu').innerHTML = numero + num;

    atualizarPrevia();
}

function clean()
{
    document.getElementById('resu').innerHTML = "";

}

function back()
{
    var resu = document.getElementById('resu').innerHTML;
    document.getElementById('resu').innerHTML = resu.substring(0, resu.length - 1);

    atualizarPrevia();

}

function calcular()
{
    var resultado = document.getElementById('resu').innerHTML;

    if (resultado)
    {
        document.getElementById('resu').innerHTML = eval(resultado);
        limparTela = true;
    }
    else
    {
        document.getElementById('resu').innerHTML = "Nada...";
    }
}

function atualizarPrevia()
{
    var conta = document.getElementById('resu').innerHTML;

    try
    {
        if (conta != "")
        {
            document.getElementById('previa').innerHTML = eval(conta);
        }
        else
        {
            document.getElementById('previa').innerHTML = "";
        }
    }
    catch
    {
        document.getElementById('previa').innerHTML = "";
    }
}