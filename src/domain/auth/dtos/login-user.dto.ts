import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDTO {
  @ApiProperty({ example: 'seuemail@teste.com' })
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @ApiProperty({ example: 'senha123456' })
  @IsNotEmpty({ message: 'Informe sua senha' })
  password: string;
}
