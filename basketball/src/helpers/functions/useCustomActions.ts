import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const useCustomActions = (actions: any) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
