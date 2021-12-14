import { Product as TProduct } from '../types/product';
import {Exclude, Expose, Transform} from "class-transformer";
import {IsEnum, IsString, Length, validate} from "class-validator";
import {Pagination} from "../types/pagination";

export enum ProductStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
}

export class Product implements TProduct, Pagination<TProduct> {
  public firstName!: string;

  @IsString()
  @Length(1, 20)
  public lastName!: string;

  @Expose()
  @IsEnum(ProductStatus)
  @Transform(({obj}) => {
    return `${obj.firstName} ${obj.lastName}`;
  })
  public fullName!: string;

  paginate(): Promise<Product[]> {
    return Promise.resolve([]);
  }
}
