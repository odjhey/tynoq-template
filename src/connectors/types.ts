export type TBinding<TProviderModel, TOperations> = (
  model: TProviderModel,
  context: any,
) => TOperations

export type TMongoModel = {
  insert: (input: any) => Promise<any>
}

export type TGeneralOperations = {
  insert: Promise<any>
}
