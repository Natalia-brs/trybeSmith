type ServiceError = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST';

export type ResponseError = {
  status: ServiceError,
  data: { message: string }
}; 

export type ResponseSucess<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServiceResponse<T> = ResponseError | ResponseSucess<T>;