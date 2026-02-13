import { getPathResolutionInfo } from "../paths";
import { getSecretStoreCapability } from "../secrets/store";
import { getBrowserLauncherCapability } from "./browser";

export type RuntimeCapabilities = {
  platform: NodeJS.Platform;
  pathProfile: string;
  secretStore: {
    id: string;
    label: string;
    available: boolean;
    reason?: string;
  };
  browserLauncher: {
    command: string;
    label: string;
    available: boolean;
  };
};

export const getRuntimeCapabilities = (): RuntimeCapabilities => {
  const pathResolution = getPathResolutionInfo();

  return {
    platform: process.platform,
    pathProfile: pathResolution.profile,
    secretStore: getSecretStoreCapability(),
    browserLauncher: getBrowserLauncherCapability(process.platform),
  };
};
