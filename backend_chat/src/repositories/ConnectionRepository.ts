import { EntityRepository, Repository } from "typeorm";
import Connections from "../entities/Connections";

@EntityRepository(Connections)
export default class ConnectionRepository extends Repository<Connections> {}