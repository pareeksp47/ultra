import { Manufacturer } from './manufacturer.entity';

describe('ManufacturerEntity', () => {
  it('should be defined', () => {
    expect(new Manufacturer()).toBeDefined();
  });
});
