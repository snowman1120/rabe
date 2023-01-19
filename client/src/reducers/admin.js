import {
  LOADING,
  ERRORS,
  GET_SELLERS,
  GET_AGENTS,
  APPROVE_AGENT,
} from '../actions/types';

const initialState = {
  loading: true,

  sellers: [],
  sellerCnt: 0,
  agents: [],
  agentCnt: 0,
  errors: {}
};

function adminReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERRORS:
      return {
        ...state,
        errors: payload,
        loading: false,
      }
    case GET_SELLERS:
      return {
        ...state,
        sellers: payload.sellers,
        sellerCnt: payload.count,
        loading: false,
      }
    case GET_AGENTS:
      return {
        ...state,
        agents: payload.agents,
        agentCnt: payload.count,
        loading: false,
      }
    case APPROVE_AGENT:
      const agents = [...state.agents];
      agents[agents.findIndex(agent => agent._id === payload.id)] = payload.agent;
      return {
        ...state,
        agents,
        loading: false,
      }
    default:
      return state;
  }
}

export default adminReducer;