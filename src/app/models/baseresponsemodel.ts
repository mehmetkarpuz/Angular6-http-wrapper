export class BaseResponseModel {
    Result: ResultModel;
    ReturnObject: any;
}

export class ResultModel {
    ResultCode: number;
    ResultMessage: string;
    ErrorDetail: string;
}

export interface UserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}