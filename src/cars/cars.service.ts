import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id:1,
            brand:'Toyota',
            model: 'Corolla'
        },
        {
            id:2,
            brand: 'Honda',
            model: 'Kawa'
        },
        {
            id:3,
            brand:'Audi',
            model:'Q3'
        }
        ];

    getAllCars(){
        return this.cars;
    }
    
    getCarById(id:number){
        const car = this.cars.find(item => item.id === id);
        
        if(!car)
            throw new BadRequestException(`Car with id ${id} not found`);

        return car;
    }
}
