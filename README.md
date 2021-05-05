# Sistema de Recompensas em React
## _Adaptação do código-fonte disponibilizado pela Digital Innovation One_

Modifiquei o código-fonte da aplicação de captura das esferas do dragão de um bootcamp da DIO, transformando a aplicação em um sistema de recompensas em que cada estrela libera um prémio e, ao conquistar todos, você pode reivindicar seu troféu.
## Principais alterações
- favicon e title da aplicação alterados
- Remoção de alguns mocks e da variável de ambiente que validava o número de prêmios do usuário
- Todos as chamadas ao hook useState foram alterados, passando uma arrow function como parâmetro a fim de evitar que esse hook fosse chamado novamente a cada renderização e a performance fosse prejudicada
- Bug na atualização de estado referente à lista do componente Action.jsx corrigido
- Testes propostos pelo desafio implementados utilizando cypress

## Imagens

![home](https://imgur.com/ErkLRM3)
![cod](https://imgur.com/tHvmadB)
![filter](https://imgur.com/AQmwuiz)
![complete](https://imgur.com/6g6Eahg)

## Instalação

Clone ou baixe o arquivo .zip do repositório

```sh
git clone https://github.com/brenovergilio/sistema-recompensas-react.git
```
Navegue para a pasta do projeto e atualize as dependências com o comando yarn

```sh
cd $path/sistema-recompensas-react
yarn
```

Inicie o servidor local com yarn start

```
yarn start
```
