import { validateOrReject } from 'class-validator';

export abstract class DTOHelper {
  public static async validateDto({ data, dtoClass, exception }) {
    try {
      const dto = new dtoClass();
      Object.keys(data).forEach(key => {
        dto[key] = data[key];
      });
      await validateOrReject(dto);
    } catch (error) {
      throw exception;
    }
  }
}
