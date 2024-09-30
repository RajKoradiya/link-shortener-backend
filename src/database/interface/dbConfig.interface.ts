export interface DataConfigurationAttr {
  type?: string;
  host?: string;
  port?: number | string;
  username?: string;
  password?: string;
  database?: string;
}

export interface IDataConfigurationAttr {
  development?: DataConfigurationAttr;
}
