class HttpError extends Error {
  status?: number;
  message: string;

  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export default HttpError;
