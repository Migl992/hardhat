import type { VerifyActionArgs } from "../types.js";
import type { NewTaskActionFunction } from "hardhat/types/tasks";

import { ROUTESCAN_PROVIDER_NAME } from "../../../routescan.js";
import { verifyContract } from "../../../verification.js";
import {
  resolveConstructorArgs,
  resolveLibraries,
} from "../../arg-resolution.js";

const verifyRoutescanAction: NewTaskActionFunction<VerifyActionArgs> = async (
  { constructorArgs, constructorArgsPath, librariesPath, ...verifyActionArgs },
  hre,
) => {
  const resolvedConstructorArgs = await resolveConstructorArgs(
    constructorArgs,
    constructorArgsPath,
  );

  const resolvedLibraries = await resolveLibraries(librariesPath);

  await verifyContract(
    {
      ...verifyActionArgs,
      constructorArgs: resolvedConstructorArgs,
      libraries: resolvedLibraries,
      provider: ROUTESCAN_PROVIDER_NAME,
    },
    hre,
  );
};

export default verifyRoutescanAction;
