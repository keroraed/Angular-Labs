# studentApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Task 5 Answers

### 1) Difference between SPA and MPA

- SPA (Single Page Application): The browser loads one HTML page once, then Angular updates the UI dynamically using JavaScript and routing. Navigation is fast because only data and component views change.
- MPA (Multi Page Application): Each navigation usually requests a new HTML page from the server. Full page reloads happen more often, which can make transitions slower but can simplify server-side rendering logic.

### 2) MVC vs MVVM in the context of Angular

- MVC:
	- Model: data and business rules.
	- View: UI.
	- Controller: handles user input and updates model/view.
- MVVM (closer to Angular):
	- Model: data.
	- View: template (.html).
	- ViewModel: component class (.ts) that exposes data/behavior to the view.
- In Angular, components + templates + data binding map naturally to MVVM style, where the component class acts as the ViewModel.

### 3) Purpose of .ts, .html, .css, .spec.ts in a component

- .ts: Component logic, state, methods, dependency injection, and metadata.
- .html: Component template (UI structure and bindings).
- .css: Component-scoped styles for the template.
- .spec.ts: Unit tests for component behavior and rendering.

### 4) Explain interpolation

- Interpolation is Angular template syntax using double curly braces, for example {{ student.name }}.
- It reads a value from the component class and displays it as text in the template.
- It is one-way binding from component to view.
