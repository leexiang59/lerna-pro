/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-12 10:59:10
 */
import { FastifyInstance } from "fastify";
import { getConnection } from "typeorm";
import { User } from "../../src/entity/User";

export default async function (fastify: FastifyInstance, opts: any) {
  fastify.get("/", async function (request, reply) {
    const result = await getConnection().manager.find(User);
    return {
      request: {
        query: request.query,
      },
      result,
    };
  });
}
