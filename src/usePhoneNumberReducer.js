import { useReducer } from "react";

export const usePhoneNumberReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "reset":
        return { count: action.payload };
      default:
        throw new Error();
    }
  };

  return useReducer(reducer, {});
};
