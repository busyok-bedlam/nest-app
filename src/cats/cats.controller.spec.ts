// import { Test, TestingModule } from '@nestjs/testing';
// import { CatsController } from './cats.controller';

// describe('Cats Controller', () => {
//   let controller: CatsController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CatsController],
//     }).compile();

//     controller = module.get<CatsController>(CatsController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });



import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [{
        email: 'sfaasfafa',
        password: 'string'
      }];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});