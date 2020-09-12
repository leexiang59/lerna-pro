/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-12 10:52:45
 */
import "reflect-metadata";
import AutoLoad from "fastify-autoload";
import * as path from "path";
import { FastifyInstance } from "fastify";
import { createConnection } from "typeorm";

export default async function (fastify: FastifyInstance, opts: any) {
  // Place here your custom code!
  try {
    const connection = await createConnection();
    console.log("database connected!");
  } catch (error) {
    console.log(error);
  }

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: opts,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: opts,
  });
}
