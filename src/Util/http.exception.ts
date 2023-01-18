class HttpException extends Error {
  status: number;
  
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const INVALID_MONGO_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';

export { HttpException, INVALID_MONGO_ID, CAR_NOT_FOUND };
