import { createAction, props } from '@ngrx/store';
import { LayoutModel } from 'src/app/layout/models/layout.model';

export const addHideShow = createAction(
  '[Layout Sidebar] Add Hide Show Menu',
  props<{ isShowSidebar: boolean }>()
);

export const retrievedSidebarHideShow = createAction(
  '[Layout Sidebar/API] Retrieve Sidebar Hide Show Success',
  props<{ layoutModel: LayoutModel }>()
);