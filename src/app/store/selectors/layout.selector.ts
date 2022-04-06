import { AppState } from '../app.state';

export const selectIsNavShowHide = (state: AppState) => state.layout.isSidebarShow;