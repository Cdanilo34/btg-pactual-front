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

Esta aplicación permite a los clientes de **BTG Pactual** gestionar sus suscripciones a Fondos Voluntarios de Pensión (FPV) y Fondos de Inversión Colectiva (FIC). Los clientes pueden suscribirse a nuevos fondos, cancelar suscripciones actuales, ver el historial de transacciones y recibir notificaciones por email o SMS.

## Características Principales

- **Suscripción a Fondos:** Los clientes pueden suscribirse a los fondos disponibles si tienen saldo suficiente.
- **Cancelación de Fondos:** Los clientes pueden cancelar su suscripción a los fondos y el monto de vinculación será devuelto.
- **Historial de Transacciones:** Se puede ver el historial de suscripciones y cancelaciones.
- **Notificaciones:** Se envía una notificación al cliente por email o SMS después de una suscripción o cancelación.
- **Validación de Saldo Insuficiente:** Si el cliente no tiene saldo suficiente para suscribirse a un fondo, se mostrará un mensaje con la descripción del error.

## Endpoints

El backend está implementado usando **Spring Boot** y expone los siguientes endpoints:

- **Suscripción a un fondo:**

  ```http
  POST /api/fondos/suscripcion/{clienteId}/{fondoId}
