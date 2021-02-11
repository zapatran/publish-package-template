/* eslint-disable dot-notation */
import { sayHello } from './sayHello';

describe('sayHello', () => {
  test('should be a fuction', () => {
    expect(typeof sayHello).toBe('function');
  });

  test('should return hello world + name', () => {
    const name = 'Otto';
    expect(sayHello(name)).toBe(`hello world: ${name}`);
  });
});
