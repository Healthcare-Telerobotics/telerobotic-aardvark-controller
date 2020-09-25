// package: github.com.pyrus.platform.protos
// file: common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Device extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): DeviceInfo | undefined;
  setInfo(value?: DeviceInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    id: number,
    info?: DeviceInfo.AsObject,
  }
}

export class DeviceInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): DeviceTypeMap[keyof DeviceTypeMap];
  setType(value: DeviceTypeMap[keyof DeviceTypeMap]): void;

  getIp(): string;
  setIp(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  clearProducesList(): void;
  getProducesList(): Array<DataTypeMap[keyof DataTypeMap]>;
  setProducesList(value: Array<DataTypeMap[keyof DataTypeMap]>): void;
  addProduces(value: DataTypeMap[keyof DataTypeMap], index?: number): DataTypeMap[keyof DataTypeMap];

  clearConsumesList(): void;
  getConsumesList(): Array<DataTypeMap[keyof DataTypeMap]>;
  setConsumesList(value: Array<DataTypeMap[keyof DataTypeMap]>): void;
  addConsumes(value: DataTypeMap[keyof DataTypeMap], index?: number): DataTypeMap[keyof DataTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    name: string,
    type: DeviceTypeMap[keyof DeviceTypeMap],
    ip: string,
    port: number,
    producesList: Array<DataTypeMap[keyof DataTypeMap]>,
    consumesList: Array<DataTypeMap[keyof DataTypeMap]>,
  }
}

export class Coordinates extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coordinates.AsObject;
  static toObject(includeInstance: boolean, msg: Coordinates): Coordinates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Coordinates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coordinates;
  static deserializeBinaryFromReader(message: Coordinates, reader: jspb.BinaryReader): Coordinates;
}

export namespace Coordinates {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class Quaternion extends jspb.Message {
  getW(): number;
  setW(value: number): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quaternion.AsObject;
  static toObject(includeInstance: boolean, msg: Quaternion): Quaternion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quaternion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quaternion;
  static deserializeBinaryFromReader(message: Quaternion, reader: jspb.BinaryReader): Quaternion;
}

export namespace Quaternion {
  export type AsObject = {
    w: number,
    x: number,
    y: number,
    z: number,
  }
}

export class CatheterCoordinates extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Coordinates | undefined;
  setPosition(value?: Coordinates): void;

  hasRotation(): boolean;
  clearRotation(): void;
  getRotation(): Quaternion | undefined;
  setRotation(value?: Quaternion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CatheterCoordinates.AsObject;
  static toObject(includeInstance: boolean, msg: CatheterCoordinates): CatheterCoordinates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CatheterCoordinates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CatheterCoordinates;
  static deserializeBinaryFromReader(message: CatheterCoordinates, reader: jspb.BinaryReader): CatheterCoordinates;
}

export namespace CatheterCoordinates {
  export type AsObject = {
    position?: Coordinates.AsObject,
    rotation?: Quaternion.AsObject,
  }
}

export class CatheterData extends jspb.Message {
  getSensorid(): number;
  setSensorid(value: number): void;

  hasCoordinates(): boolean;
  clearCoordinates(): void;
  getCoordinates(): CatheterCoordinates | undefined;
  setCoordinates(value?: CatheterCoordinates): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CatheterData.AsObject;
  static toObject(includeInstance: boolean, msg: CatheterData): CatheterData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CatheterData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CatheterData;
  static deserializeBinaryFromReader(message: CatheterData, reader: jspb.BinaryReader): CatheterData;
}

export namespace CatheterData {
  export type AsObject = {
    sensorid: number,
    coordinates?: CatheterCoordinates.AsObject,
  }
}

export class RobotControllerData extends jspb.Message {
  getMovementvelocity(): number;
  setMovementvelocity(value: number): void;

  getRotationvelocity(): number;
  setRotationvelocity(value: number): void;

  getDeflectionvelocity(): number;
  setDeflectionvelocity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotControllerData.AsObject;
  static toObject(includeInstance: boolean, msg: RobotControllerData): RobotControllerData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotControllerData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotControllerData;
  static deserializeBinaryFromReader(message: RobotControllerData, reader: jspb.BinaryReader): RobotControllerData;
}

export namespace RobotControllerData {
  export type AsObject = {
    movementvelocity: number,
    rotationvelocity: number,
    deflectionvelocity: number,
  }
}

export class NullableRobotControllerData extends jspb.Message {
  hasNull(): boolean;
  clearNull(): void;
  getNull(): google_protobuf_struct_pb.NullValueMap[keyof google_protobuf_struct_pb.NullValueMap];
  setNull(value: google_protobuf_struct_pb.NullValueMap[keyof google_protobuf_struct_pb.NullValueMap]): void;

  hasData(): boolean;
  clearData(): void;
  getData(): RobotControllerData | undefined;
  setData(value?: RobotControllerData): void;

  getKindCase(): NullableRobotControllerData.KindCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullableRobotControllerData.AsObject;
  static toObject(includeInstance: boolean, msg: NullableRobotControllerData): NullableRobotControllerData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NullableRobotControllerData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullableRobotControllerData;
  static deserializeBinaryFromReader(message: NullableRobotControllerData, reader: jspb.BinaryReader): NullableRobotControllerData;
}

export namespace NullableRobotControllerData {
  export type AsObject = {
    pb_null: google_protobuf_struct_pb.NullValueMap[keyof google_protobuf_struct_pb.NullValueMap],
    data?: RobotControllerData.AsObject,
  }

  export enum KindCase {
    KIND_NOT_SET = 0,
    NULL = 1,
    DATA = 2,
  }
}

export class ElectricalSignalData extends jspb.Message {
  getSignalid(): number;
  setSignalid(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElectricalSignalData.AsObject;
  static toObject(includeInstance: boolean, msg: ElectricalSignalData): ElectricalSignalData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElectricalSignalData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElectricalSignalData;
  static deserializeBinaryFromReader(message: ElectricalSignalData, reader: jspb.BinaryReader): ElectricalSignalData;
}

export namespace ElectricalSignalData {
  export type AsObject = {
    signalid: number,
    value: number,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Frame extends jspb.Message {
  clearCatheterdataList(): void;
  getCatheterdataList(): Array<CatheterData>;
  setCatheterdataList(value: Array<CatheterData>): void;
  addCatheterdata(value?: CatheterData, index?: number): CatheterData;

  hasNullablerobotcontrollerdata(): boolean;
  clearNullablerobotcontrollerdata(): void;
  getNullablerobotcontrollerdata(): NullableRobotControllerData | undefined;
  setNullablerobotcontrollerdata(value?: NullableRobotControllerData): void;

  clearElectricalsignalsList(): void;
  getElectricalsignalsList(): Array<ElectricalSignalData>;
  setElectricalsignalsList(value: Array<ElectricalSignalData>): void;
  addElectricalsignals(value?: ElectricalSignalData, index?: number): ElectricalSignalData;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Frame.AsObject;
  static toObject(includeInstance: boolean, msg: Frame): Frame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Frame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Frame;
  static deserializeBinaryFromReader(message: Frame, reader: jspb.BinaryReader): Frame;
}

export namespace Frame {
  export type AsObject = {
    catheterdataList: Array<CatheterData.AsObject>,
    nullablerobotcontrollerdata?: NullableRobotControllerData.AsObject,
    electricalsignalsList: Array<ElectricalSignalData.AsObject>,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface DeviceTypeMap {
  ROBOT: 0;
  CONTROLLER: 1;
  CATHETER: 2;
  HEADSET: 3;
  ELECTRICALSIGNALGENERATOR: 4;
}

export const DeviceType: DeviceTypeMap;

export interface DataTypeMap {
  ROBOTSTATE: 0;
  ROBOTCONTROLS: 1;
  CATHETERSENSORCOORDINATES: 2;
  ELECTRICALSIGNALS: 3;
}

export const DataType: DataTypeMap;

