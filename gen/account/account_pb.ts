// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file account/account.proto (package account, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message account.Account
 */
export class Account extends Message<Account> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: google.protobuf.Struct profile = 2;
   */
  profile?: Struct;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 4;
   */
  updatedAt?: Timestamp;

  constructor(data?: PartialMessage<Account>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.Account";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "profile", kind: "message", T: Struct },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "updated_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Account {
    return new Account().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Account {
    return new Account().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Account {
    return new Account().fromJsonString(jsonString, options);
  }

  static equals(a: Account | PlainMessage<Account> | undefined, b: Account | PlainMessage<Account> | undefined): boolean {
    return proto3.util.equals(Account, a, b);
  }
}

/**
 * @generated from message account.AccountResponse
 */
export class AccountResponse extends Message<AccountResponse> {
  /**
   * @generated from field: account.Account account = 1;
   */
  account?: Account;

  constructor(data?: PartialMessage<AccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.AccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account", kind: "message", T: Account },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountResponse {
    return new AccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountResponse {
    return new AccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountResponse {
    return new AccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AccountResponse | PlainMessage<AccountResponse> | undefined, b: AccountResponse | PlainMessage<AccountResponse> | undefined): boolean {
    return proto3.util.equals(AccountResponse, a, b);
  }
}

/**
 * @generated from message account.CreateAccountRequest
 */
export class CreateAccountRequest extends Message<CreateAccountRequest> {
  /**
   * @generated from field: google.protobuf.Struct profile = 1;
   */
  profile?: Struct;

  constructor(data?: PartialMessage<CreateAccountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.CreateAccountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "profile", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateAccountRequest {
    return new CreateAccountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAccountRequest {
    return new CreateAccountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateAccountRequest {
    return new CreateAccountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateAccountRequest | PlainMessage<CreateAccountRequest> | undefined, b: CreateAccountRequest | PlainMessage<CreateAccountRequest> | undefined): boolean {
    return proto3.util.equals(CreateAccountRequest, a, b);
  }
}

/**
 * @generated from message account.GetAccountByUuidRequest
 */
export class GetAccountByUuidRequest extends Message<GetAccountByUuidRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  constructor(data?: PartialMessage<GetAccountByUuidRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.GetAccountByUuidRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAccountByUuidRequest {
    return new GetAccountByUuidRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAccountByUuidRequest {
    return new GetAccountByUuidRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAccountByUuidRequest {
    return new GetAccountByUuidRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetAccountByUuidRequest | PlainMessage<GetAccountByUuidRequest> | undefined, b: GetAccountByUuidRequest | PlainMessage<GetAccountByUuidRequest> | undefined): boolean {
    return proto3.util.equals(GetAccountByUuidRequest, a, b);
  }
}

/**
 * @generated from message account.UpdateAccountRequest
 */
export class UpdateAccountRequest extends Message<UpdateAccountRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  /**
   * @generated from field: google.protobuf.Struct profile = 2;
   */
  profile?: Struct;

  constructor(data?: PartialMessage<UpdateAccountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.UpdateAccountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "profile", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAccountRequest {
    return new UpdateAccountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAccountRequest {
    return new UpdateAccountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAccountRequest {
    return new UpdateAccountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateAccountRequest | PlainMessage<UpdateAccountRequest> | undefined, b: UpdateAccountRequest | PlainMessage<UpdateAccountRequest> | undefined): boolean {
    return proto3.util.equals(UpdateAccountRequest, a, b);
  }
}

/**
 * @generated from message account.DeleteAccountRequest
 */
export class DeleteAccountRequest extends Message<DeleteAccountRequest> {
  /**
   * @generated from field: string uuid = 1;
   */
  uuid = "";

  constructor(data?: PartialMessage<DeleteAccountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.DeleteAccountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAccountRequest {
    return new DeleteAccountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAccountRequest {
    return new DeleteAccountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAccountRequest {
    return new DeleteAccountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteAccountRequest | PlainMessage<DeleteAccountRequest> | undefined, b: DeleteAccountRequest | PlainMessage<DeleteAccountRequest> | undefined): boolean {
    return proto3.util.equals(DeleteAccountRequest, a, b);
  }
}

/**
 * @generated from message account.DeleteAccountResponse
 */
export class DeleteAccountResponse extends Message<DeleteAccountResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  constructor(data?: PartialMessage<DeleteAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.DeleteAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAccountResponse {
    return new DeleteAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAccountResponse {
    return new DeleteAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAccountResponse {
    return new DeleteAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteAccountResponse | PlainMessage<DeleteAccountResponse> | undefined, b: DeleteAccountResponse | PlainMessage<DeleteAccountResponse> | undefined): boolean {
    return proto3.util.equals(DeleteAccountResponse, a, b);
  }
}

/**
 * @generated from message account.GetByQueryAccountRequest
 */
export class GetByQueryAccountRequest extends Message<GetByQueryAccountRequest> {
  /**
   * @generated from field: string select = 1;
   */
  select = "";

  /**
   * @generated from field: string condition = 2;
   */
  condition = "";

  constructor(data?: PartialMessage<GetByQueryAccountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.GetByQueryAccountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "select", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "condition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetByQueryAccountRequest {
    return new GetByQueryAccountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetByQueryAccountRequest {
    return new GetByQueryAccountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetByQueryAccountRequest {
    return new GetByQueryAccountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetByQueryAccountRequest | PlainMessage<GetByQueryAccountRequest> | undefined, b: GetByQueryAccountRequest | PlainMessage<GetByQueryAccountRequest> | undefined): boolean {
    return proto3.util.equals(GetByQueryAccountRequest, a, b);
  }
}

/**
 * @generated from message account.GetByQueryAccountResponse
 */
export class GetByQueryAccountResponse extends Message<GetByQueryAccountResponse> {
  /**
   * @generated from field: repeated account.Account accounts = 1;
   */
  accounts: Account[] = [];

  constructor(data?: PartialMessage<GetByQueryAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.GetByQueryAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "accounts", kind: "message", T: Account, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetByQueryAccountResponse {
    return new GetByQueryAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetByQueryAccountResponse {
    return new GetByQueryAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetByQueryAccountResponse {
    return new GetByQueryAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetByQueryAccountResponse | PlainMessage<GetByQueryAccountResponse> | undefined, b: GetByQueryAccountResponse | PlainMessage<GetByQueryAccountResponse> | undefined): boolean {
    return proto3.util.equals(GetByQueryAccountResponse, a, b);
  }
}

/**
 * @generated from message account.PaginationRequest
 */
export class PaginationRequest extends Message<PaginationRequest> {
  /**
   * @generated from field: int32 page_index = 1;
   */
  pageIndex = 0;

  /**
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  constructor(data?: PartialMessage<PaginationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.PaginationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationRequest {
    return new PaginationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationRequest {
    return new PaginationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationRequest {
    return new PaginationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PaginationRequest | PlainMessage<PaginationRequest> | undefined, b: PaginationRequest | PlainMessage<PaginationRequest> | undefined): boolean {
    return proto3.util.equals(PaginationRequest, a, b);
  }
}

/**
 * @generated from message account.Metadata
 */
export class Metadata extends Message<Metadata> {
  /**
   * @generated from field: int32 total_count = 1;
   */
  totalCount = 0;

  /**
   * @generated from field: account.PaginationRequest pagination = 2;
   */
  pagination?: PaginationRequest;

  constructor(data?: PartialMessage<Metadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.Metadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "pagination", kind: "message", T: PaginationRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata {
    return new Metadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata {
    return new Metadata().fromJsonString(jsonString, options);
  }

  static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean {
    return proto3.util.equals(Metadata, a, b);
  }
}

/**
 * @generated from message account.PaginationResponse
 */
export class PaginationResponse extends Message<PaginationResponse> {
  /**
   * @generated from field: repeated account.Account data = 1;
   */
  data: Account[] = [];

  /**
   * @generated from field: account.Metadata metadata = 2;
   */
  metadata?: Metadata;

  constructor(data?: PartialMessage<PaginationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "account.PaginationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: Account, repeated: true },
    { no: 2, name: "metadata", kind: "message", T: Metadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationResponse {
    return new PaginationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationResponse {
    return new PaginationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationResponse {
    return new PaginationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PaginationResponse | PlainMessage<PaginationResponse> | undefined, b: PaginationResponse | PlainMessage<PaginationResponse> | undefined): boolean {
    return proto3.util.equals(PaginationResponse, a, b);
  }
}
