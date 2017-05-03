var tabuleiro = [];//http://aurelio.net/web/mina/
var branco = 0;
var preto = 0;
var jogadorAtual = 'preto';

function NovoJogo(){
  for(i = 1; i <= 8; i++){
    tabuleiro[i] = new Array();
    for(j = 1; j <= 8; j++){
      tabuleiro[i][j] = new Array();
      tabuleiro[i][j] = 'semBolinha';
    }
  }

  tabuleiro[4][4] = 'branco';
  tabuleiro[4][5] = 'preto';
  tabuleiro[5][4] = 'preto';
  tabuleiro[5][5] = 'branco';

  jogandoCliques();
}

function jogandoCliques(){
  atualJogador.innerHTML = "Jogador Atual = "+jogadorAtual;
  preto = 0;
  branco = 0;
  for(i = 1; i <= 8; i++)
    for(j = 1; j <= 8; j++){
      clique = '';
      if(tabuleiro[i][j] == 'semBolinha'){
        cont = trocarBolinhas(i, j, jogadorAtual, 0);
       if(cont)
          clique = 'onclick="verificaJogada('+i+','+j+')"';
      }
      else
      {
        if(tabuleiro[i][j] == 'branco') branco++;
        else preto++;
      }
      document.all.item("tabuleiro"+(i)+(j)).innerHTML = '<img src="'+tabuleiro[i][j]+'.gif" '+clique+' width="35" height="35">';
    }
  branco_pontos.innerHTML = branco;
  preto_pontos.innerHTML = preto;
}



function trocarBolinhas(i, j, corBolinha, comecou)
{
  trocaOk = 0;
  if(tabuleiro[i][j] != 'semBolinha') return 0;

  if(i > 2 && j > 2)
  {
    if(tabuleiro[i - 1][j - 1] != 'semBolinha' && tabuleiro[i - 1][j - 1] != corBolinha)
    {
      k = i - 2;
      l = j - 2;
      while(k > 1 && l > 1 && tabuleiro[k][l] != 'semBolinha' && tabuleiro[k][l] != corBolinha)
      {
        k--;
        l--;
      }
      if(tabuleiro[k][l] == corBolinha) while(k < i && l < j)
      {
        k++;
        l++;
       if(comecou)
          tabuleiro[k][l] = corBolinha;
        trocaOk++;
      }
    }
  }

  if(i > 2)
  {
    if(tabuleiro[i - 1][j] != 'semBolinha' && tabuleiro[i - 1][j] != corBolinha)
    {
      k = i - 2;
      while(k > 1 && tabuleiro[k][j] != 'semBolinha' && tabuleiro[k][j] != corBolinha)
      {
        k--;
      }
      if(tabuleiro[k][j] == corBolinha) while(k < i)
      {
        k++;
       if(comecou)
          tabuleiro[k][j] = corBolinha;
        trocaOk++;
      }
    }
  }

  if(i < 7 && j > 2)
  {
    if(tabuleiro[i + 1][j - 1] != 'semBolinha' && tabuleiro[i + 1][j - 1] != corBolinha)
    {
      k = i + 2;
      l = j - 2;
      while(k < 8 && l > 1 && tabuleiro[k][l] != 'semBolinha' && tabuleiro[k][l] != corBolinha)
      {
        k++;
        l--;
      }
      if(tabuleiro[k][l] == corBolinha) while(k > i && l < j)
      {
        k--;
        l++;
      if(comecou)
          tabuleiro[k][l] = corBolinha;
        trocaOk++;
      }
    }
  }

  if(j < 7)
  {
    if(tabuleiro[i][j + 1] != 'semBolinha' && tabuleiro[i][j + 1] != corBolinha)
    {
      l = j + 2;
      while(l < 8 && tabuleiro[i][l] != 'semBolinha' && tabuleiro[i][l] != corBolinha)
      {
        l++;
      }
      if(tabuleiro[i][l] == corBolinha) while(l > j)
      {
        l--;
        if(comecou)
          tabuleiro[i][l] = corBolinha;
        trocaOk++;
      }
    }
  }

  if(i > 2 && j < 7)
  {
    if(tabuleiro[i - 1][j + 1] != 'semBolinha' && tabuleiro[i - 1][j + 1] != corBolinha)
    {
      k = i - 2;
      l = j + 2;
      while(k > 1 && l < 8 && tabuleiro[k][l] != 'semBolinha' && tabuleiro[k][l] != corBolinha)
      {
        k--;
        l++;
      }
      if(tabuleiro[k][l] == corBolinha) while(k < i && l > j)
      {
        k++;
        l--;
        if(comecou)
          tabuleiro[k][l] = corBolinha;
        trocaOk++;
      }
    }
  }

  if(i < 7)
  {
    if(tabuleiro[i + 1][j] != 'semBolinha' && tabuleiro[i + 1][j] != corBolinha)
    {
      k = i + 2;
      while(k < 8 && tabuleiro[k][j] != 'semBolinha' && tabuleiro[k][j] != corBolinha)
      {
        k++;
      }
      if(tabuleiro[k][j] == corBolinha) while(k > i)
      {
        k--;
        if(comecou)
          tabuleiro[k][j] = corBolinha;
        trocaOk++;
      }
    }
  }

  if(i < 7 && j < 7)
  {
    if(tabuleiro[i + 1][j + 1] != 'semBolinha' && tabuleiro[i + 1][j + 1] != corBolinha)
    {
      k = i + 2;
      l = j + 2;
      while(k < 8 && l < 8 && tabuleiro[k][l] != 'semBolinha' && tabuleiro[k][l] != corBolinha)
      {
        k++;
        l++;
      }
      if(tabuleiro[k][l] == corBolinha) while(k > i && l > j)
      {
        k--;
        l--;
        if(comecou)
          tabuleiro[k][l] = corBolinha;
        trocaOk++;
      }
    }
  }

  if(j > 2)
  {
    if(tabuleiro[i][j - 1] != 'semBolinha' && tabuleiro[i][j - 1] != corBolinha)
    {
      l = j - 2;
      while(l > 1 && tabuleiro[i][l] != 'semBolinha' && tabuleiro[i][l] != corBolinha)
      {
        l--;
      }
      if(tabuleiro[i][l] == corBolinha) while(l < j)
      {
        l++;
        if(comecou)
          tabuleiro[i][l] = corBolinha;
        trocaOk++;
      }
    }
  }
  if(trocaOk && comecou) tabuleiro[i][j] = corBolinha;

  return trocaOk;
}

function verificaJogada(m, n)
{
  verificaJogadas = 0;
  if(trocarBolinhas(m, n, jogadorAtual, true))
  {
    if(jogadorAtual == 'branco') jogadorAtual = 'preto';
    else jogadorAtual = 'branco';
    jogandoCliques();
    for(o = 1; o < 9; o++)
    {
      for(p = 1; p < 9; p++)
      {
        if(trocarBolinhas(o, p, jogadorAtual, false) > 0) verificaJogadas++;
      }
    }
    if(verificaJogadas == 0)
    {
      if(jogadorAtual == 'branco') jogadorAtual = 'preto';
      else jogadorAtual = 'branco';
      jogandoCliques();
      for(o = 1; o < 9; o++)
        for(p = 1; p < 9; p++)
          if(trocarBolinhas(o, p, jogadorAtual, false)) verificaJogadas++;
      if(verificaJogadas == 0)
      {
        atualJogador.innerHTML = "Game Over!";
        jogandoCliques();
        window.location.reload();
      }
      else
      {
        if(jogadorAtual == 'branco') {
          alert('Vitoria do Branco!!');
          jogandoCliques();
          window.location.reload();
        }
        else {
          atualJogador.innerHTML = alert('Vitoria do Preto!');
          jogandoCliques();
          window.location.reload();
        }
      }
    }
  }
}
