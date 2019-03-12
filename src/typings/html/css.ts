import { StandardLonghandPropertiesHyphen } from 'csstype'

export type CSS = StandardLonghandPropertiesHyphen<string>;
export type CSSRecord = Partial<Record<keyof CSS, CSS[keyof CSS]>>;
