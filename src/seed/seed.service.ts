import { BrandsService } from './../brands/brands.service';
import { Injectable } from '@nestjs/common';

import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.sed';

@Injectable()
export class SeedService {

  // CARS_SEED
  // BRAND_SEED
  constructor(private readonly carService: CarsService, private readonly brandService: BrandsService ){}


  runSeed(){
    this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRAND_SEED);
    return 'Seed successfully';
  }
}
