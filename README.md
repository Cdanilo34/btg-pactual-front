# BtgPactual

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# BTG Pactual Fondos - Plataforma de Gestión

## Endpoints (Frontend)

- **Suscripción a un fondo:**

  ```typescript
  this.http.post(`${this.apiBase}/suscripcion/${clienteId}/${fondoId}`, {})

  this.http.post(`${this.apiBase}/cancelacion/${clienteId}/${fondoId}`, {})

  this.http.get(`${this.apiBase}/fondos/list`)

  this.http.get(`${this.apiBase}/transaccion/historial`)

## Instalación y Ejecución
 ## Backend
 Clonar el repositorio del backend:

 git clone https://github.com/Cdanilo34/bgt-pactual-back

 cd bgt-pactual-back

 mvn spring-boot:run

El backend estará disponible en http://localhost:8080

Clonar el repositorio del frontend:

git clone https://github.com/Cdanilo34/btg-pactual-front

## Frontend
Clonar el repositorio del frontend:

git clone https://github.com/Cdanilo34/btg-pactual-front

Navegar al directorio del frontend:

cd btg-pactual-front

Instalar las dependencias:

npm install --force

npm start

El frontend estará disponible en http://localhost:4200.

## Requisitos
Java 17 para ejecutar el backend.
Node.js y npm para ejecutar el frontend.
MongoDB para almacenar los datos de los clientes, fondos y transacciones.