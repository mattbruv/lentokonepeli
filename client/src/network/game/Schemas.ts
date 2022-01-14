import { EntityType } from "./EntityType";
import { NetType } from "./NetType";

export interface NetObjectSchema {
    [key: string]: NetType;
};

const ManSchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
}

const GroundSchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
    width: NetType.u16,
    subType: NetType.u8
}

const CoastSchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
    subType: NetType.u8,
    direction: NetType.u8
}

const WaterSchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
    width: NetType.u16,
    subType: NetType.u8,
    direction: NetType.u8
}

const RunwaySchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
    team: NetType.u8,
    direction: NetType.u8,
    health: NetType.u8,
}

const BunkerSchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
    team: NetType.u8,
    health: NetType.u8,
}

const FlagSchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
    team: NetType.u8
}

const BackgroundItemSchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
    subType: NetType.u8,
    direction: NetType.u8
}

const HillSchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
    type: NetType.u8
}

const PalmSchema: NetObjectSchema = {
    x: NetType.i16,
    y: NetType.i16,
    direction: NetType.u8
}

const PlaneSchema: NetObjectSchema = {
    clientX: NetType.i16,
    clientY: NetType.i16,
    direction: NetType.u8,
    planeType: NetType.u8,
}

export function getSchema(type: EntityType): NetObjectSchema {
    switch (type) {
        case EntityType.PLANE:
            return PlaneSchema;
        case EntityType.MAN:
            return ManSchema;
        case EntityType.GROUND:
            return GroundSchema;
        case EntityType.WATER:
            return WaterSchema;
        case EntityType.COAST:
            return CoastSchema;
        case EntityType.RUNWAY:
            return RunwaySchema;
        case EntityType.IMPORTANT_BUILDING:
            return BunkerSchema;
        case EntityType.BACKGROUND_ITEM:
            return BackgroundItemSchema;
        case EntityType.FLAG:
            return FlagSchema;
        case EntityType.HILL:
            return HillSchema;
        case EntityType.PALM:
            return PalmSchema;
        default:
            throw new Error("Unimplemented Schema type: " + type);
    }
}