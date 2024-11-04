# inject3

Inject a dependency (service locator pattern).

## Install

```sh
npm install --save-dev inject3
```

## Usage

```ts
// app.ts
import { inject } from 'inject3';
const fs = inject('fs', () => require('fs'));
fs.readFileSync('data.json');

// app.spec.ts
import { injector } from 'inject3';
injector.mock('fs', () => ({
  readFileSync: () => 'result of call of fs.readFileSync()',
}));
```

## License

[MIT License](https://opensource.org/licenses/MIT) (c) 2024
