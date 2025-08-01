class ApiResponse {
    constructor(public statusCode: number, public data:Object, public message:string | string[], public success:boolean = true){
        this.success = this.statusCode < 400
    }
}

export default ApiResponse;