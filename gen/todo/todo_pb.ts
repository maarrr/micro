// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file todo/todo.proto (package todo, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message todo.Todo
 */
export class Todo extends Message<Todo> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string title = 2;
   */
  title = "";

  /**
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * @generated from field: bool completed = 4;
   */
  completed = false;

  /**
   * The creation timestamp
   *
   * @generated from field: google.protobuf.Timestamp create_time = 5;
   */
  createTime?: Timestamp;

  constructor(data?: PartialMessage<Todo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.Todo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "completed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "create_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Todo {
    return new Todo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Todo {
    return new Todo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Todo {
    return new Todo().fromJsonString(jsonString, options);
  }

  static equals(a: Todo | PlainMessage<Todo> | undefined, b: Todo | PlainMessage<Todo> | undefined): boolean {
    return proto3.util.equals(Todo, a, b);
  }
}

/**
 * @generated from message todo.CreateTodoRequest
 */
export class CreateTodoRequest extends Message<CreateTodoRequest> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  constructor(data?: PartialMessage<CreateTodoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.CreateTodoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTodoRequest {
    return new CreateTodoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTodoRequest {
    return new CreateTodoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTodoRequest {
    return new CreateTodoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateTodoRequest | PlainMessage<CreateTodoRequest> | undefined, b: CreateTodoRequest | PlainMessage<CreateTodoRequest> | undefined): boolean {
    return proto3.util.equals(CreateTodoRequest, a, b);
  }
}

/**
 * @generated from message todo.GetTodoRequest
 */
export class GetTodoRequest extends Message<GetTodoRequest> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  constructor(data?: PartialMessage<GetTodoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.GetTodoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTodoRequest {
    return new GetTodoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTodoRequest {
    return new GetTodoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTodoRequest {
    return new GetTodoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetTodoRequest | PlainMessage<GetTodoRequest> | undefined, b: GetTodoRequest | PlainMessage<GetTodoRequest> | undefined): boolean {
    return proto3.util.equals(GetTodoRequest, a, b);
  }
}

/**
 * @generated from message todo.TodoResponse
 */
export class TodoResponse extends Message<TodoResponse> {
  /**
   * @generated from field: todo.Todo todo = 1;
   */
  todo?: Todo;

  constructor(data?: PartialMessage<TodoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.TodoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "todo", kind: "message", T: Todo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TodoResponse {
    return new TodoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TodoResponse {
    return new TodoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TodoResponse {
    return new TodoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TodoResponse | PlainMessage<TodoResponse> | undefined, b: TodoResponse | PlainMessage<TodoResponse> | undefined): boolean {
    return proto3.util.equals(TodoResponse, a, b);
  }
}

/**
 * @generated from message todo.ListTodosRequest
 */
export class ListTodosRequest extends Message<ListTodosRequest> {
  constructor(data?: PartialMessage<ListTodosRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.ListTodosRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTodosRequest {
    return new ListTodosRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTodosRequest {
    return new ListTodosRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTodosRequest {
    return new ListTodosRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListTodosRequest | PlainMessage<ListTodosRequest> | undefined, b: ListTodosRequest | PlainMessage<ListTodosRequest> | undefined): boolean {
    return proto3.util.equals(ListTodosRequest, a, b);
  }
}

/**
 * @generated from message todo.ListTodosResponse
 */
export class ListTodosResponse extends Message<ListTodosResponse> {
  /**
   * @generated from field: repeated todo.Todo todos = 1;
   */
  todos: Todo[] = [];

  constructor(data?: PartialMessage<ListTodosResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.ListTodosResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "todos", kind: "message", T: Todo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTodosResponse {
    return new ListTodosResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTodosResponse {
    return new ListTodosResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTodosResponse {
    return new ListTodosResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListTodosResponse | PlainMessage<ListTodosResponse> | undefined, b: ListTodosResponse | PlainMessage<ListTodosResponse> | undefined): boolean {
    return proto3.util.equals(ListTodosResponse, a, b);
  }
}

/**
 * @generated from message todo.UpdateTodoRequest
 */
export class UpdateTodoRequest extends Message<UpdateTodoRequest> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string title = 2;
   */
  title = "";

  /**
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * @generated from field: bool completed = 4;
   */
  completed = false;

  constructor(data?: PartialMessage<UpdateTodoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.UpdateTodoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "completed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateTodoRequest {
    return new UpdateTodoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateTodoRequest {
    return new UpdateTodoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateTodoRequest {
    return new UpdateTodoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateTodoRequest | PlainMessage<UpdateTodoRequest> | undefined, b: UpdateTodoRequest | PlainMessage<UpdateTodoRequest> | undefined): boolean {
    return proto3.util.equals(UpdateTodoRequest, a, b);
  }
}

/**
 * @generated from message todo.DeleteTodoRequest
 */
export class DeleteTodoRequest extends Message<DeleteTodoRequest> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  constructor(data?: PartialMessage<DeleteTodoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.DeleteTodoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTodoRequest {
    return new DeleteTodoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTodoRequest {
    return new DeleteTodoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTodoRequest {
    return new DeleteTodoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteTodoRequest | PlainMessage<DeleteTodoRequest> | undefined, b: DeleteTodoRequest | PlainMessage<DeleteTodoRequest> | undefined): boolean {
    return proto3.util.equals(DeleteTodoRequest, a, b);
  }
}

/**
 * @generated from message todo.DeleteTodoResponse
 */
export class DeleteTodoResponse extends Message<DeleteTodoResponse> {
  /**
   * @generated from field: bool success = 1;
   */
  success = false;

  constructor(data?: PartialMessage<DeleteTodoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.DeleteTodoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTodoResponse {
    return new DeleteTodoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTodoResponse {
    return new DeleteTodoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTodoResponse {
    return new DeleteTodoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteTodoResponse | PlainMessage<DeleteTodoResponse> | undefined, b: DeleteTodoResponse | PlainMessage<DeleteTodoResponse> | undefined): boolean {
    return proto3.util.equals(DeleteTodoResponse, a, b);
  }
}

