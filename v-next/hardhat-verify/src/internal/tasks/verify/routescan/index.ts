import type { NewTaskDefinition } from "hardhat/types/tasks";

import { task } from "hardhat/config";

import { extendWithVerificationArgs } from "../utils.js";

const verifyRoutescanTask: NewTaskDefinition = extendWithVerificationArgs(
  task(["verify", "routescan"], "Verify a contract on Routescan"),
)
  .setAction(() => import("./task-action.js"))
  .build();

export default verifyRoutescanTask;
