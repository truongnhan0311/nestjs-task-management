import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'dataflow',
    password: 'DataFlow2023!',
    database: 'dataflow',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}
