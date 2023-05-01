
export default class CustomResponse {
    public readonly status;
    public readonly message;

    constructor(status:number, message: string | Object[] | Object) {
        this.status = status;
        this.message = message;
    }
}