import { ResourceWithOptions } from "adminjs";
import { Company, Truck, Driver, User, Supply, Trip } from "../../models";
import { companyResourceOptions } from "./company";
import { truckResourceOptions } from './truck'
import { driverResourceOptions } from './driver'
import { supplyResourceOptions } from "./supply";
import { tripResourceOptions } from "./trip";
import { userResourceOptions } from "./user";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Truck,
    options: truckResourceOptions,
  },
  {
    resource: Driver,
    options: driverResourceOptions,
  },
  {
    resource: Company,
    options: companyResourceOptions
  },
  {
    resource: Supply,
    options: supplyResourceOptions
  },
  {
    resource: Trip,
    options: tripResourceOptions
  },
  {
    resource: User,
    options: userResourceOptions
  },
  
]