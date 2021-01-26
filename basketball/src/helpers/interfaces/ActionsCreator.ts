export interface IActionsCreator {
  [key: string]: (payload: any) => any;
}
