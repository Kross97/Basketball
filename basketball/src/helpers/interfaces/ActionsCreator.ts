export interface ActionsCreator {
  [key: string]: (payload: any) => void;
}
