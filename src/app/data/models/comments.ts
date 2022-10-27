export interface CommentsResponse {
    data:{ id:number,
    attributes:{
        carId:number,
        userID:number,
        content:string,
        date:string
    }
}[]
    
}

export interface Comment {
        id?:number,
        carId:any,
        userID:any,
        content:string,
        date:string
    }
    
    export interface PostCommentPayload{
        data:{
            carId:string,
            userID:any,
            content:string,
            date:string

         }}


