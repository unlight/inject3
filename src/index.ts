const dependencies = new Map();
/**
 * Mock a dependency for unit testing
 * @param token The injection token
 * @param mock The mock object
 */
function mock(token: any, mock: () => any) {
  dependencies.set(token, mock);
}

function clear() {
  dependencies.clear();
}
/**
 * Inject a dependency
 * @param token The injection token
 * @param factory Factory function that returns the dependency
 * @returns The dependency or a mock object if the dependency was mocked using mock()
 */
export function inject<T>(token: any, factory: () => T): T {
  const dependency = dependencies.get(token);
  if (dependency) {
    return dependency();
  }
  return factory();
}

export const injector = {
  mock,
  clear,
};
