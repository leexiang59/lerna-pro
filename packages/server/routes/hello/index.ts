import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance, opts: any) {
  fastify.get("/", async function (request, reply) {
    return "hello world";
  });
}
