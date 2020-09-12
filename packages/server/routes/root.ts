/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-12 10:52:45
 */
import { FastifyInstance } from "fastify";

module.exports = async function (fastify: FastifyInstance, opts: any) {
  fastify.get("/", async function (request, reply) {
    return { root: true, age: 22 };
  });
};
