import { POSTFIXES } from '../../constants/actionPostfixes';

const { REQUEST_POSTFIX } = POSTFIXES;

const createActionWithPostfix = (action, payload, postfix) => {
  return {
    type: action.type.slice(0, action.type.length - REQUEST_POSTFIX.length) + postfix,
    payload,
  };
};

export default createActionWithPostfix;