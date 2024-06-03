import { CarsModel } from "../models/CarsModel";

export const getready = () => {
    return CarsModel.query().where('availability', true);
}

//Get All Cars
export const get = () => {
 return CarsModel.query();
}

//Get Car By ID
export const getById = (id: number) => {
 return CarsModel.query().findById(id)
}

//Create Car
export const create = (args: any) => {

 return CarsModel.query().insert(args)
}

//Update Car
export const update = (id: number,args: any) =>{
    
    return CarsModel.query().findById(id).patch(args)
}

//Delete Car
export const deleteCars = (id: number) =>{
    return CarsModel.query().deleteById(id)
}