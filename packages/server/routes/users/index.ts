/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-12 10:59:10
 */
import { FastifyInstance } from "fastify";
import { getConnection } from "typeorm";
import { User } from "../../src/entity/User";

function formatOutput(data) {
  return {
    code: "0000",
    msg: "success",
    data,
  };
}

export default async function (fastify: FastifyInstance, opts: any) {
  // 获取用户
  fastify.get("/", async function (request, reply) {
    const result = await getConnection().manager.find(User);
    return formatOutput(result);
  });

  // 新增用户
  fastify.post("/add", async function (request, reply) {
    const body: any = request.body;
    let user = new User();
    user.lastName = body.lastName;
    user.firstName = body.firstName;
    user.age = body.age;
    try {
      const result = await getConnection().manager.save(user);
      return formatOutput(result);
    } catch (error) {
      return {
        code: "0001",
        msg: error,
        data: null,
      };
    }
  });

  // 删除用户
  fastify.delete("/del", async function (request, reply) {
    const body: any = request.body;
    let user = new User();
    user.id = body.id;
    const result = await getConnection().manager.remove(user);
    return formatOutput(result);
  });
}
