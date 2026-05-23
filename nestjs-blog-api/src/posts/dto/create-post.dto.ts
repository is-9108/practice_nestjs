import { IsDateString, IsNotEmpty, IsString } from "class-validator";


export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    content!: string;

    @IsString()
    @IsNotEmpty()
    author!: string;
    
    @IsDateString()
    createdAt!: string;
}
