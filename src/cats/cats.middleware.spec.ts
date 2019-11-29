import { CatsMiddleware } from './cats.middleware';

describe('CatsMiddleware', () => {
  it('should be defined', () => {
    expect(new CatsMiddleware()).toBeDefined();
  });
});
