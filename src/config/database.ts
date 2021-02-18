import { Photo } from "../entity/Photo";

export default {
  type: "mysql",
  host: "test",
  port: 3306,
  username: "root",
  password: "",
  database: "test",
  entities: [Photo],
  synchronize: true,
  logging: false,
};
