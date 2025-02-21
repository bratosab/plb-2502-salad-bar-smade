import { createAction, props } from "@ngrx/store";

export const SetName = createAction('app/set-name', props<{ name: string }>())
export const SetTel = createAction('app/set-tel', props<{ tel: string }>())