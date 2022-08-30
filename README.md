Reverte a migration mais recente
npx sequelize-cli db:migrate:undo

Gera o model e a migration
npx sequelize-cli model:generate --name NomeDoModel --attributes nomeDoAtributo:string

Gera a migration
npx sequelize-cli migration:generate --name User