if (typeof window === 'undefined') {
  const globalScope = globalThis as typeof globalThis & {
    localStorage?: {
      getItem?: (key: string) => string | null;
      setItem?: (key: string, value: string) => void;
      removeItem?: (key: string) => void;
      clear?: () => void;
      key?: (index: number) => string | null;
      length?: number;
    };
  };

  const currentStorage = globalScope.localStorage;
  const hasValidApi =
    currentStorage &&
    typeof currentStorage.getItem === 'function' &&
    typeof currentStorage.setItem === 'function' &&
    typeof currentStorage.removeItem === 'function' &&
    typeof currentStorage.clear === 'function';

  if (!hasValidApi) {
    const store = new Map<string, string>();

    globalScope.localStorage = {
      getItem: (key: string) => (store.has(key) ? store.get(key)! : null),
      setItem: (key: string, value: string) => {
        store.set(String(key), String(value));
      },
      removeItem: (key: string) => {
        store.delete(String(key));
      },
      clear: () => {
        store.clear();
      },
      key: (index: number) => Array.from(store.keys())[index] ?? null,
      get length() {
        return store.size;
      },
    };
  }
}

export {};