import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {

    private cars : Car[]= [
        // {
        //     id: uuidv4(),
        //     brand: 'Toyota',
        //     model: 'Corolla' 
        // }
        
    ];


    findAll() {
        return this.cars;
    }

    findOneById( id: string ) {
        
        const car = this.cars.find( car => car.id === id );
        if ( !car ) throw new NotFoundException(`Car with id '${ id }' not found`);
        
        return car;
    }

    addCar(addCar: CreateCarDto){
        const newCar : Car = {
            id : uuidv4(),
            ...addCar
        }
        this.cars.push(newCar);

        return newCar;

    }

    updateCar(id:string, updateCarDto: UpdateCarDto){
        
        let carDb =this.findOneById(id);

        this.cars = this.cars.map( car =>{
            if(car.id === id){
                carDb = {...carDb,...updateCarDto,id}
                return carDb;
            }
            return car;
        });
        return carDb;

    }

    deleteCar(id:string){
        let cardDb = this.findOneById(id);

        // const indexArray = this.cars.indexOf(cardDb);
        // this.cars.splice(indexArray,1);
        this.cars = this.cars.filter(car => car.id !== id);
        return this.cars;

    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars;
    }

}
