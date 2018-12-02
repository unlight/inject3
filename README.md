# inject
Inject a dependency (service locator pattern).

## USAGE
Factory:
```ts
// app.ts
import { inject } from 'njct';
const fs = inject('fs', () => require('fs'));
fs.readFileSync('data.json');

// app.spec.ts
import { injector } from 'njct';
injector.mock('fs', () => ({ readFileSync: () => 'result of call of fs.readFileSync()' }));
```

Value:
```
import { provide } from 'njct';
provide.value('answer', 42);
```

Class:
```
import { provide } from 'njct';
class Car { }
provide.class(Car, Car);
const car = inject(Car); // car instanceof Car
```

Service (singleton class):
```
import { provide, inject } from 'njct';
class Car { }
class MockCar { }
const vehicle = inject.service(Car); // vehicle instanceof Car 
// Override
provide.service(Car, MockCar);
vehicle = inject.service(Car);  // vehicle instanceof MockCar
```

## CHANGELOG
See [CHANGELOG](CHANGELOG.md)
