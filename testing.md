# Testing con Angular

## Configurar Jest

1. Desinstalar las dependencias de jasmine y karma del json porque no son las librerias de testing que utilizamos.
``` yarn
yarn remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```

2. Instalar la libreria [JestJs](https://jestjs.io/es-ES/) como dependencia de desarrollo.
``` yarn
yarn add --save-dev jest jest-preset-angular @types/jest
```

3. Crear el `setup-jest.ts` en la carpeta raiz del proyecto y agregar la siguiente linea.
``` typescript
import 'jest-preset-angular/setup-jest';
```

4. Agregar en el package.json, la configuración de Jest.
``` typescript
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
```

5. Configurar JEST en tsconfig.json y tsconfig.spec.json.
``` typescript
"types": [
  "jest"
]
Configurar los comandos para ejecutar las pruebas en el package.json
"test": "jest",
"test:watch": "jest --watchAll",
```

6. Remover karma.config.js y el archivo test.ts.
