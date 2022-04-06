import { createReducer, on } from '@ngrx/store';
import { LayoutModel } from 'src/app/layout/models/layout.model';
import { addHideShow, retrievedSidebarHideShow } from '../action/layout.action';

export const initialState:LayoutModel = {
    isSidebarShow: true
};

export const layoutReducer = createReducer(
  initialState,
  on(addHideShow, (state, { isShowSidebar }) => {
    return {state, ...{isSidebarShow: isShowSidebar}};
  }),
  on(retrievedSidebarHideShow, (state, { layoutModel }) => layoutModel)
);