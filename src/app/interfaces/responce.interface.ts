import { IProject } from "./projects.interface";


export interface ProjectsResponse extends BaseResponse {
    projects: IProject[];
}
  
export interface Payload<T> {
    payload: T;
}

export interface BaseResponse {
    message?: string;
}
  
export interface ErrorResponse {
    error?: BaseResponse;
}
  