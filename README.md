# Jogo-Othello
Jogo Othello, trabalho da cadeira de Paradigmas de Programação. Desenvolvido em JavaScript.

Othello é um jogo para 2 jogadores e consiste num tabuleiro com 64 casas (8 por 8), onde
inicialmente são colocadas 4 peças ao centro, duas de cada cor em diagonais (Figura 2) onde a peça preta
faz sempre o primeiro movimento e os jogadores jogam alternadamente. O jogo tem como meta capturar as
peças adversárias e transformá-las nas da sua cor. Vence quem tiver mais peças ao seu favor no final da
partida. O jogo acaba quando não há mais casas a se jogarem dentro do tabuleiro ou quando não houver
mais jogadas possíveis dentro das regras para ambos os jogadores.
Quando for a sua vez, o jogador coloca um peão. Para poder colocar um peão, é obrigatório que
este cerque, em linha reta (horizontal, vertical ou diagonal) um ou mais peões do adversário. "Cercar"
significa posicionar um peão ou uma fila de peões do adversário entre um dos seus peões já colocados e o
peão que você acabou de colocar. Os peões cercados passam a ser da cor do jogador que efetuou a
jogada. Para poder colocar um peão, é obrigatório que esse peão "cerque" um ou mais peões do
adversário; se for impossível, o Jogador tem de "passar" a vez. No entanto, se existir qualquer possibilidade
de jogo, não é permitido passar a vez. Para poder converter uma fila inteira do adversário, esta deverá ser
em linha contínua sem estar interrompida por um peão da sua cor ou por um espaço vazio. Nas próximas
seções tem-se alguns exemplos de jogadas.

# Instalando e rodando

Faça o clone do repositório:

$ git clone git@github.com:eifmaciel/Jogo-Othello.git

Entre no diretório.

$ cd Jogo-Othello

$ execute o index.html no browser
