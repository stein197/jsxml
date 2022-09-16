import type {ObjectMap} from "@stein197/ts-util";
import type {Content} from "./Content";

export type Node = Content | [name: string, attributes: ObjectMap<string> | null, children: Node[] | null];
