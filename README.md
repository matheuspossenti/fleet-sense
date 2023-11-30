# Fleet Sense
Projeto desenvolvido no decorrer das disciplinas de Extensão e Pesquisa em Computação e Desenvolvimento Web I

## Configuração do Ambiente

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados na sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

Clone este repositório:

```bash
git clone https://github.com/matheuspossenti/fleet-sense.git
cd fleet-sense
```

Instale as dependências:

```bash
npm install
```
## Configuração do Banco de Dados

O projeto utiliza um ambiente de desenvolvimento para criação do banco de dados localmente, para executar as migrations e os seeders, execute

Certifique-se de ter um banco de dados configurado. Você pode ajustar as configurações do banco no arquivo config/database.js.

### Migrations

Execute as migrations para criar as tabelas no banco de dados:

```bash
npx sequelize-cli db:migrate
```

### Seeders

Execute os seeders para popular o banco de dados com dados iniciais:

```bash
npx sequelize-cli db:seed:all
```

## Executando o Projeto
Inicie o servidor:

```bash
npm run dev
```

O servidor estará disponível em http://localhost:3000/admin
