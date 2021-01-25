// @ts-ignore
import { bindActionCreators } from 'redux';
// @ts-ignore
import { useDispatch } from 'react-redux';
import { IActionsCreator } from '../interfaces/ActionsCreator';

export const useCustomActions = (actions: IActionsCreator) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
