import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
//@UsePipes( ValidationPipe )
export class CarsController {
  
  constructor(
    private readonly carsService: CarsService
  ) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }

  @Get(':id')
  getCarById( @Param('id' , new ParseUUIDPipe({  version:'4'}) ) id: string ) {

    return this.carsService.findOneById( id );
  }

  @Post()
  createNewCar( @Body() createCarDto: CreateCarDto ) {
    const newCar = this.carsService.addCar(createCarDto)
    if(newCar === null)
      return `Problem with add car`

    return newCar;
  }

  @Patch(':id')
  updateCar( 
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCarDto: UpdateCarDto ) 
  {
    return this.carsService.updateCar(id, updateCarDto);
  }

  @Delete(':id')
  deleteCarById( @Param('id', ParseUUIDPipe ) id: string ) {
    return this.carsService.deleteCar(id);
  }
}
