```
brew install postgresql
brew services start postgresql
```

login to postgres as admin user

```
CREATE ROLE api_user WITH LOGIN PASSWORD 'password';
ALTER ROLE api_user CREATEDB;
```

exit postgres `\q` and log in as new user `psql -d postgres -U api_user`

```
CREATE DATABASE super_api;
\c super_api
```