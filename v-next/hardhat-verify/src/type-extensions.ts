import "hardhat/types/config";
declare module "hardhat/types/config" {
  export interface HardhatUserConfig {
    verify?: VerificationProvidersUserConfig;
  }

  export interface VerificationProvidersUserConfig {
    blockscout?: BlockscoutUserConfig;
    etherscan?: EtherscanUserConfig;
    routescan?: RoutescanUserConfig;
  }

  export interface BlockscoutUserConfig {
    enabled?: boolean;
  }

    export interface RoutescanUserConfig {
    enabled?: boolean;
  }

  export type EtherscanUserConfig =
    | {
        apiKey: SensitiveString;
        enabled?: true;
      }
    | {
        apiKey?: SensitiveString;
        enabled?: false;
      };

  export interface HardhatConfig {
    verify: VerificationProvidersConfig;
  }

  export interface VerificationProvidersConfig {
    blockscout: BlockscoutConfig;
    etherscan: EtherscanConfig;
    routescan: RoutescanConfig;
  }

  export interface BlockscoutConfig {
    enabled: boolean;
  }

  export interface RoutescanConfig {
    enabled: boolean;
  }

  export interface EtherscanConfig {
    apiKey: ResolvedConfigurationVariable;
    enabled: boolean;
  }

  export interface BlockExplorersConfig {
    routescan?: {
      name: string;    
      url: string;      
      apiUrl: string;   
    };
  }
}
