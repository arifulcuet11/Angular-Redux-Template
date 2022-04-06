import { InjectionToken } from "@angular/core";
export interface AppConstant {
  TOKEN: string
}
 
 export const ApplicationConstant: AppConstant = {
  TOKEN: '_token',
}
export const APP_CONSTANT = new InjectionToken<AppConstant>('app.constant');