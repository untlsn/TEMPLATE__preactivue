export interface Signal<T> {
  value: T
}

const useSignal = <T>(value: T): Signal<T> => useLocalStore(() => ({ value }));

export default useSignal;
