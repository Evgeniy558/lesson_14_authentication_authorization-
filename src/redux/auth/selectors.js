export const selectIsLoggedIn = (state) => {
  return state.auth.isLoggedIn;
};
export const selectIsRefreshing = (state) => {
  return state.auth.isRefreshing;
};

export const selectUser = (state) => {
  return state.auth.user;
};
