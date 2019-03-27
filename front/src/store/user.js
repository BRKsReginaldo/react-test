import createGlobalState from '../lib/global-state'

const initialState = null;

const [useGlobalUser, Provider] = createGlobalState(initialState);

export const GlobalUserProvider = Provider;

export default useGlobalUser