export type Attribute = Record<string, string>;

interface CustomAttributes {
  'data-test-subj': string;
};

export type CustomAttribute = Partial<CustomAttributes>;
