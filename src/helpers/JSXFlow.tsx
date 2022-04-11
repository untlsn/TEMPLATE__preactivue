interface ForProps<T> {
  each: T[]
  fallback?: any,

  children(value: T, index: number, array: T[]): any
}

export const For = <T extends any>(props: ForProps<T>) => {
  return props.each.length ? props.each.map(props.children) : props.fallback ?? <></>;
};

interface ShowProps {
  children: any,
  when: any,
  fallback?: any
}

export const Show = (props: ShowProps) => props.when ? props.children : props.fallback ?? <></>;
