import { CarsService } from './cars.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService ){

    }
    
    @Get()
    getAllCars(){
        return this.carsService.getAllCars();
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id :number){

        return this.carsService.getCarById(id);
    }

    @Post()
    createNewCar( @Body() body: any){
        return body;
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id :number,
        @Body() body: any){
        return 
        {
            id
        };
    }


    @Delete(':id')
    deleteCarById(@Param('id', ParseIntPipe) id :number){
        return {
            method: 'DELETE',
            id
        };
    }
}
