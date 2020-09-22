import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  @IsEmail({}, { message: 'Informe um e-mail válido' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Informe uma senha' })
  password: string;
}
