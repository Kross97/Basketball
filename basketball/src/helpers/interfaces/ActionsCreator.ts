export interface ActionsCreator {
  [key: string]: () => void;
}
