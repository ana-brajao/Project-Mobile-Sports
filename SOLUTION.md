<p>Para enobrecer o projeto utilizei o Styled-Component, como também o TypeScript. Além do plug-in babel para dar mais power-ups para styled-components + Nextjs. Também no 'styled-components' utilizei a globalStyle para redefinir e/ou compartilhar estilos em todas as suas páginas. Incluindo o createGlobalStylee e retorná-lo na renderização. Formatação Prettier, dentre outras.

Criei um onChange para manipular a variável value (que também foi criada).

Depois criei uma função que valida os dados da variável value, vendo se são menores que 100 ou maiores que 1000, essa função é chamada lá no onClick do botão, ou seja, toda vez que o botão é clicado ele chama essa função.

Depois que a função de validação não encontra nenhum erro, ela chama a função responsável por se comunicar com o backend que é a sendValues.

Como não temos back, criei uma rota na pasta api dentro da pasta pages.

O next tem nativamente funções mock que não exigem a manipulação do banco de dados, essa função mock do next é responsável por validar se o número é ímpar ou par. Se o número for ímpar ele retorna o status 400 e o front entende isso como erro, caso contrário ele retorna o status 200 e o front entende como sucesso.</p>


