// @ts-ignore
import { bindActionCreators } from 'redux';
// @ts-ignore
import { useDispatch } from 'react-redux';
import { ActionsCreator } from '../interfaces/ActionsCreator';

export const useCustomActions = (actions: ActionsCreator) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
