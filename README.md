## core

Business Logic

## connectors

Bind core + providers

## providers

data providers

# Layers

```
----------------------------------------
Mobile
----------------------------------------
server
----------------------------------------
gql - authentication via context
----------------------------------------
connectors
----------------------------------------
   connectors - pull from provider
   --------------------
       providers - authorization (db)
       --------------------
       core/usecases - authorization (usecase)
       --------------------
       core/entities - authorization (entity)
       --------------------
   connectors - push to provider
       --------------------
       core/usecases - authorization (usecase)
       --------------------
       core/entities - authorization (entity)
       --------------------
       providers - authorization (db)
       --------------------
```
