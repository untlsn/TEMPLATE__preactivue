type KeyType = string|number|symbol

interface ObjectWrapper<Key extends KeyType, Val, Obj = Record<Key, Val>> {
  mapKeys<T extends KeyType>(callback: (val: Val, key: Key, obj: Obj) => T): ObjectWrapper<T, Val>
  mapValues<T>(callback: (val: Val, key: Key, obj: Obj) => T): ObjectWrapper<Key, T>
  filter(callback: (val: Val, key: Key, obj: Obj) => boolean): ObjectWrapper<Key, Val>
  valueOf(): Obj
  entriesOf(): [key: Key, val: Val]
  pairOf<KeyName extends KeyType = 'key', ValName extends KeyType = 'val'>(keyName: KeyName, valName: ValName): (Record<KeyName, Key> & Record<ValName, Val>)[]
}

const objectWrapper = <Key extends KeyType, Val, Obj = Record<Key, Val>>(obj: Obj): ObjectWrapper<Key, Val, Obj> => {
  return {
    mapKeys<T extends KeyType>(callback: (val: Val, key: Key, obj: Obj) => T) {
      return objectWrapper(
        Object.fromEntries(
          Object.entries(obj).map(([key, val]) => [(callback as any)(val, key, obj), val]),
        ),
      );
    },
    mapValues(callback: any): any {
      return objectWrapper(
        Object.fromEntries(
          Object.entries(obj).map(([key, val]) => [key, (callback as any)(val, key, obj)]),
        ),
      );
    },
    filter(callback: (val: Val, key: any, obj: Obj) => boolean): ObjectWrapper<Key, Val> {
      return objectWrapper(
        Object.fromEntries(
          Object.entries(obj).filter(([key, val]) => callback(val, key, obj)),
        ),
      ) as any;
    },
    valueOf: () => obj,
    entriesOf: () => Object.entries(obj) as any,
    pairOf(keyName: any, valName: any) {
      return Object.entries(obj).map(([key, val]) => ({ [keyName]: key, [valName]: val })) as any;
    },
  };
};

export default objectWrapper;
