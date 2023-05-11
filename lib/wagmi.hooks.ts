/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Generated by @wagmi/cli@0.1.15 on 5/11/2023 at 3:39:02 AM
import {
  useContractRead,
  type UseContractReadConfig,
  useContractWrite,
  type UseContractWriteConfig,
  usePrepareContractWrite,
  type UsePrepareContractWriteConfig,
} from "wagmi";
import {
  type ReadContractResult,
  type WriteContractMode,
  type PrepareWriteContractResult,
} from "wagmi/actions";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Partnership
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const partnershipABI = [
  { stateMutability: "nonpayable", type: "constructor", inputs: [] },
  { type: "error", inputs: [], name: "ErrorFromNotASigner" },
  { type: "error", inputs: [], name: "ErrorSenderIsNotAPartner" },
  { type: "error", inputs: [], name: "ErrorTokenIsNotTransferable" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "signature", internalType: "bytes", type: "bytes" },
      { name: "issuer", internalType: "address", type: "address" },
      { name: "partner", internalType: "address", type: "address" },
    ],
    name: "_validSignature",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "a", internalType: "address", type: "address" },
      { name: "b", internalType: "address", type: "address" },
    ],
    name: "getPartnerRoute",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
    name: "partnerships",
    outputs: [
      { name: "issuerTokenId", internalType: "uint256", type: "uint256" },
      { name: "partnerTokenId", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "issuer", internalType: "address", type: "address" },
      { name: "partner", internalType: "address", type: "address" },
      { name: "signature", internalType: "bytes", type: "bytes" },
      { name: "uri", internalType: "string", type: "string" },
    ],
    name: "safeMint",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "index", internalType: "uint256", type: "uint256" }],
    name: "tokenByIndex",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "index", internalType: "uint256", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__.
 */
export function usePartnershipRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof partnershipABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, TFunctionName, TSelectData>,
    "abi"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"_validSignature"`.
 */
export function usePartnershipValidSignature<
  TSelectData = ReadContractResult<typeof partnershipABI, "_validSignature">
>(
  config: Omit<
    UseContractReadConfig<
      typeof partnershipABI,
      "_validSignature",
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "_validSignature",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "_validSignature", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"balanceOf"`.
 */
export function usePartnershipBalanceOf<
  TSelectData = ReadContractResult<typeof partnershipABI, "balanceOf">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "balanceOf", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "balanceOf",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "balanceOf", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"getApproved"`.
 */
export function usePartnershipGetApproved<
  TSelectData = ReadContractResult<typeof partnershipABI, "getApproved">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "getApproved", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "getApproved",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "getApproved", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"getPartnerRoute"`.
 */
export function usePartnershipGetPartnerRoute<
  TSelectData = ReadContractResult<typeof partnershipABI, "getPartnerRoute">
>(
  config: Omit<
    UseContractReadConfig<
      typeof partnershipABI,
      "getPartnerRoute",
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "getPartnerRoute",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "getPartnerRoute", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function usePartnershipIsApprovedForAll<
  TSelectData = ReadContractResult<typeof partnershipABI, "isApprovedForAll">
>(
  config: Omit<
    UseContractReadConfig<
      typeof partnershipABI,
      "isApprovedForAll",
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "isApprovedForAll",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "isApprovedForAll", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"name"`.
 */
export function usePartnershipName<
  TSelectData = ReadContractResult<typeof partnershipABI, "name">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "name", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "name",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "name", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"owner"`.
 */
export function usePartnershipOwner<
  TSelectData = ReadContractResult<typeof partnershipABI, "owner">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "owner", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "owner",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "owner", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"ownerOf"`.
 */
export function usePartnershipOwnerOf<
  TSelectData = ReadContractResult<typeof partnershipABI, "ownerOf">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "ownerOf", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "ownerOf",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "ownerOf", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"partnerships"`.
 */
export function usePartnershipPartnerships<
  TSelectData = ReadContractResult<typeof partnershipABI, "partnerships">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "partnerships", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "partnerships",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "partnerships", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function usePartnershipSupportsInterface<
  TSelectData = ReadContractResult<typeof partnershipABI, "supportsInterface">
>(
  config: Omit<
    UseContractReadConfig<
      typeof partnershipABI,
      "supportsInterface",
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "supportsInterface",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "supportsInterface", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"symbol"`.
 */
export function usePartnershipSymbol<
  TSelectData = ReadContractResult<typeof partnershipABI, "symbol">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "symbol", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "symbol",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "symbol", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function usePartnershipTokenByIndex<
  TSelectData = ReadContractResult<typeof partnershipABI, "tokenByIndex">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "tokenByIndex", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "tokenByIndex",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "tokenByIndex", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 */
export function usePartnershipTokenOfOwnerByIndex<
  TSelectData = ReadContractResult<typeof partnershipABI, "tokenOfOwnerByIndex">
>(
  config: Omit<
    UseContractReadConfig<
      typeof partnershipABI,
      "tokenOfOwnerByIndex",
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "tokenOfOwnerByIndex",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "tokenOfOwnerByIndex", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"tokenURI"`.
 */
export function usePartnershipTokenUri<
  TSelectData = ReadContractResult<typeof partnershipABI, "tokenURI">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "tokenURI", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "tokenURI",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "tokenURI", TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"totalSupply"`.
 */
export function usePartnershipTotalSupply<
  TSelectData = ReadContractResult<typeof partnershipABI, "totalSupply">
>(
  config: Omit<
    UseContractReadConfig<typeof partnershipABI, "totalSupply", TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: partnershipABI,
    functionName: "totalSupply",
    ...config,
  } as UseContractReadConfig<typeof partnershipABI, "totalSupply", TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link partnershipABI}__.
 */
export function usePartnershipWrite<
  TMode extends WriteContractMode,
  TFunctionName extends string
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof partnershipABI, string>["abi"],
        TFunctionName
      >
    : UseContractWriteConfig<TMode, typeof partnershipABI, TFunctionName> & {
        abi?: never;
      } = {} as any
) {
  return useContractWrite<TMode, typeof partnershipABI, TFunctionName>({
    abi: partnershipABI,
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"approve"`.
 */
export function usePartnershipApprove<TMode extends WriteContractMode>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof partnershipABI, "approve">["abi"],
        "approve"
      > & { functionName?: "approve" }
    : UseContractWriteConfig<TMode, typeof partnershipABI, "approve"> & {
        abi?: never;
        functionName?: "approve";
      } = {} as any
) {
  return useContractWrite<TMode, typeof partnershipABI, "approve">({
    abi: partnershipABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePartnershipRenounceOwnership<
  TMode extends WriteContractMode
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<
          typeof partnershipABI,
          "renounceOwnership"
        >["abi"],
        "renounceOwnership"
      > & { functionName?: "renounceOwnership" }
    : UseContractWriteConfig<
        TMode,
        typeof partnershipABI,
        "renounceOwnership"
      > & {
        abi?: never;
        functionName?: "renounceOwnership";
      } = {} as any
) {
  return useContractWrite<TMode, typeof partnershipABI, "renounceOwnership">({
    abi: partnershipABI,
    functionName: "renounceOwnership",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"safeMint"`.
 */
export function usePartnershipSafeMint<TMode extends WriteContractMode>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof partnershipABI, "safeMint">["abi"],
        "safeMint"
      > & { functionName?: "safeMint" }
    : UseContractWriteConfig<TMode, typeof partnershipABI, "safeMint"> & {
        abi?: never;
        functionName?: "safeMint";
      } = {} as any
) {
  return useContractWrite<TMode, typeof partnershipABI, "safeMint">({
    abi: partnershipABI,
    functionName: "safeMint",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePartnershipSafeTransferFrom<TMode extends WriteContractMode>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<
          typeof partnershipABI,
          "safeTransferFrom"
        >["abi"],
        "safeTransferFrom"
      > & { functionName?: "safeTransferFrom" }
    : UseContractWriteConfig<
        TMode,
        typeof partnershipABI,
        "safeTransferFrom"
      > & {
        abi?: never;
        functionName?: "safeTransferFrom";
      } = {} as any
) {
  return useContractWrite<TMode, typeof partnershipABI, "safeTransferFrom">({
    abi: partnershipABI,
    functionName: "safeTransferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePartnershipSetApprovalForAll<
  TMode extends WriteContractMode
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<
          typeof partnershipABI,
          "setApprovalForAll"
        >["abi"],
        "setApprovalForAll"
      > & { functionName?: "setApprovalForAll" }
    : UseContractWriteConfig<
        TMode,
        typeof partnershipABI,
        "setApprovalForAll"
      > & {
        abi?: never;
        functionName?: "setApprovalForAll";
      } = {} as any
) {
  return useContractWrite<TMode, typeof partnershipABI, "setApprovalForAll">({
    abi: partnershipABI,
    functionName: "setApprovalForAll",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePartnershipTransferFrom<TMode extends WriteContractMode>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<
          typeof partnershipABI,
          "transferFrom"
        >["abi"],
        "transferFrom"
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<TMode, typeof partnershipABI, "transferFrom"> & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any
) {
  return useContractWrite<TMode, typeof partnershipABI, "transferFrom">({
    abi: partnershipABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePartnershipTransferOwnership<
  TMode extends WriteContractMode
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<
          typeof partnershipABI,
          "transferOwnership"
        >["abi"],
        "transferOwnership"
      > & { functionName?: "transferOwnership" }
    : UseContractWriteConfig<
        TMode,
        typeof partnershipABI,
        "transferOwnership"
      > & {
        abi?: never;
        functionName?: "transferOwnership";
      } = {} as any
) {
  return useContractWrite<TMode, typeof partnershipABI, "transferOwnership">({
    abi: partnershipABI,
    functionName: "transferOwnership",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link partnershipABI}__.
 */
export function usePreparePartnershipWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof partnershipABI, TFunctionName>,
    "abi"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: partnershipABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof partnershipABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"approve"`.
 */
export function usePreparePartnershipApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof partnershipABI, "approve">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: partnershipABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof partnershipABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePreparePartnershipRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof partnershipABI, "renounceOwnership">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: partnershipABI,
    functionName: "renounceOwnership",
    ...config,
  } as UsePrepareContractWriteConfig<typeof partnershipABI, "renounceOwnership">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"safeMint"`.
 */
export function usePreparePartnershipSafeMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof partnershipABI, "safeMint">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: partnershipABI,
    functionName: "safeMint",
    ...config,
  } as UsePrepareContractWriteConfig<typeof partnershipABI, "safeMint">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePreparePartnershipSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof partnershipABI, "safeTransferFrom">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: partnershipABI,
    functionName: "safeTransferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof partnershipABI, "safeTransferFrom">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePreparePartnershipSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof partnershipABI, "setApprovalForAll">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: partnershipABI,
    functionName: "setApprovalForAll",
    ...config,
  } as UsePrepareContractWriteConfig<typeof partnershipABI, "setApprovalForAll">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePreparePartnershipTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof partnershipABI, "transferFrom">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: partnershipABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof partnershipABI, "transferFrom">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link partnershipABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePreparePartnershipTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof partnershipABI, "transferOwnership">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: partnershipABI,
    functionName: "transferOwnership",
    ...config,
  } as UsePrepareContractWriteConfig<typeof partnershipABI, "transferOwnership">);
}