# inject3
Inject a dependency (service locator pattern).

## USAGE
```ts
// app.ts
import { inject } from 'inject3';
const fs = inject('fs', () => require('fs'));
fs.readFileSync('data.json');

// app.spec.ts
import { injector } from 'inject3';
injector.mock('fs', () => ({ readFileSync: () => 'result of call of fs.readFileSync()' }));
```

## CHANGELOG
See [CHANGELOG](CHANGELOG.md)
