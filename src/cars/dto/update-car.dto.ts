import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string
    
    @IsString({ message: `The brand must be a cool string`})
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    @MinLength(3, { message: 'Mínimo 3 caracteres'})
    readonly model?: string;

}