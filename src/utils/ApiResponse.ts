class ApiResponse {
  statusCode!: number;
  data: any;
  success: boolean = false;
  message!: string;

  construntor(
    statusCode: number,
    data: any,
    success: boolean = true,
    message: string
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.success = success;
    this.message = message;
  }
}

export { ApiResponse };
