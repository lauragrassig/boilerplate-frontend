# Boilerplate FrontEnd
Foi elaborado um boilerplate com o propósito de otimizar e agilizar o processo de desenvolvimento, proporcionando uma estrutura inicial padronizada para a criação de projetos. Um boilerplate, nesse contexto, refere-se a um conjunto de arquivos e configurações pré-definidos que servem como ponto de partida para o desenvolvimento de um software.

Ao utilizar esse boilerplate, os desenvolvedores podem economizar tempo na configuração inicial do projeto, uma vez que muitas das tarefas e decisões comuns já foram tratadas e incorporadas no conjunto de arquivos fornecido. Isso inclui configurações de ambiente, instalação de dependências, organização de diretórios, configurações de build e outras configurações relevantes ao desenvolvimento.

**O boilerplate dever ser utilizado em conjunto com a documentação fornecida, a fim de garantir a conformidade com as demais padronizações estabelecidas no processo de desenvolvimento.**

## IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (e desative o Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

- **ESLINT**
    
    O Eslint é uma ferramenta de análise de código estática que ajuda a identificar problemas e inconsistências no código-fonte. Sua utilização é imprescindível para garantir a qualidade do código e a adesão aos padrões definidos pela equipe.
    
    Para utilizar o Eslint em nossos projetos, é necessário instalar os seguintes plugins: eslint, eslint-config-airbnb-base, eslint-plugin-import e eslint-plugin-vue. Esses plugins fornecem as configurações e regras necessárias para o Eslint funcionar corretamente em nossos projetos.
    
    É necessário conter as seguintes regras (rules):
    
    **"import/order":** define a ordem correta para as importações no código. Nesse caso, o padrão definido é que as importações de módulos do projeto estejam sempre antes das importações de bibliotecas externas, e que as importações dos estilos do projeto sejam sempre as últimas a serem importadas. Além disso, define a ordem alfabética das importações. Quando uma importação não segue essa ordem, um erro será gerado.
    
    **"prettier/prettier":** configura o plugin "prettier" para que seja utilizado em conjunto com o Eslint, de forma que as regras de formatação definidas no Prettier sejam aplicadas automaticamente ao código. Nesse caso, define que a quebra de linha no final do arquivo deve ser determinada automaticamente pelo sistema operacional.
    
    **"import/no-duplicates":** impede a importação de um mesmo módulo em mais de um lugar no código. Quando isso acontece, um erro será gerado. "import/no-unresolved": impede a importação de módulos inexistentes ou com nome incorreto. Quando isso acontece, um erro será gerado. Além disso, define que a verificação de nomes de módulos deve ser feita sem levar em conta a sensibilidade à caixa, ou seja, não difere entre letras maiúsculas e minúsculas.
    
    **"no-unused-vars"**: Ajuda a identificar variáveis não utilizadas em um código, ajudando a reduzir a quantidade de código morto e a aumentar a legibilidade do código.
    
    "**no-console"**: Ajuda a evitar o uso excessivo do console.log() em código de produção, pois o uso excessivo do console pode diminuir o desempenho do aplicativo.
    
    **"no-trailing-spaces":** Esta regra ajuda a evitar espaços desnecessários no final de uma linha, ajudando a manter a legibilidade e a organização do código.



- **HUSKY**
    
    O Husky é uma ferramenta que nos permite automatizar tarefas e executar comandos em determinados momentos durante o ciclo de vida do Git. Utilizaremos o Husky em conjunto com o comando pre-push do Git para garantir que as verificações do Eslint sejam executadas antes de cada push. Para utilizar o Husky com o pre-push, é necessário instalar o Husky em nosso projeto e configurar o comando pre-push para executar as verificações do Eslint.
		
		
	

## Instalação

```sh
npm install
```

### Compile e Hot-Reload (dev)

```sh
npm run dev
```

### Compile e Minify (prod)

```sh
npm run build
```

### Lint usando o [ESLint](https://eslint.org/)

```sh
npm run lint
```
