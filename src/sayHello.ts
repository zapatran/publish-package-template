export interface SayHello {
  (event: string): string;
}

export const sayHello: SayHello = (name: string) => `hello world: ${name}`;
