export type Model<T extends Model<T> = Model<any>> = Pick<T, keyof T> & Record<string, any>;
