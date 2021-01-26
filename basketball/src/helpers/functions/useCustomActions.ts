import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { IActionsCreator } from '../interfaces/ActionsCreator';

export const useCustomActions = (actions: IActionsCreator) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
