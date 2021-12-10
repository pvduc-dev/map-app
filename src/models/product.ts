import {Exclude, Expose, Transform} from "class-transformer";
import {IsString} from "class-validator";

export class Product {
  public firstName!: string;

  public lastName!: string;

  @Expose()
  @Transform(({obj}) => {
    return `${obj.firstName} ${obj.lastName}`;
  })
  public fullName?: string;
}
