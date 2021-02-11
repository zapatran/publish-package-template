export interface SayHello {
  (event: string): void;
}

export const sayHello: SayHello = (name: string) => {
  return `hello world: ${name}`;
};
