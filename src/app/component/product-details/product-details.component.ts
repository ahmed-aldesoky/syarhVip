import { Component, OnInit } from '@angular/core';
import { Car, CarResponse } from 'src/app/data/models/cars';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { CarService } from 'src/app/data/service/cars.service';
import { CommentsService } from 'src/app/data/service/comments.service';
import {Comment,CommentsResponse, PostCommentPayload } from 'src/app/data/models/comments';
import { AuthenticationService } from 'src/app/data/service/authentication.service';
import {UsersService } from 'src/app/data/service/users.service';
import {StorageService } from 'src/app/data/service/storage.service';
import { DatePipe } from '@angular/common';

import { Subscription } from 'rxjs';
import { User,UserResponse } from 'src/app/data/models/user';
import { map } from 'lodash';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [DatePipe]
})
export class ProductDetailsComponent implements OnInit {
  carID!:any;
  car!:Car;
  comments:Comment[]=[];
  currentlanguage!:string;
  isLoggedIn = false;
  avatarInitial = '';
  username = '';
  authStatus!: Subscription;
  userId='';
  users: UserResponse=[]
  newComment:PostCommentPayload={
  data:{
  carId:"",
  userID:"",
  content:"",
  date:""
  }}


  constructor(private activatedRouter:ActivatedRoute,
    private carService:CarService,
    private auth: AuthenticationService,
    private userService: UsersService,
    private commentService:CommentsService,
    private ss:StorageService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {


     // get comments--------------***************
     this.commentService.getComment().subscribe((comments)=>(
      this.comments=comments.data.map((comment)=>({
        id:comment.id,  
        carId: comment.attributes.carId,
        userID: comment.attributes.userID,
        content: comment.attributes.content,
        date: comment.attributes.date,
      }))
    ))

    this.authStatus = this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;
        if (status) {
          this.avatarInitial = this.username[0] || 'Q';
          this.userId = this.auth.getPersistedUser().id;        
        }
    });

// get cars details-------------------**********
    this.activatedRouter.paramMap.subscribe((parmas:ParamMap)=>{
      this.carID= parmas.get("id")
    })
    this.carService.getCarById(this.carID).subscribe((car)=>(
      this.car=car.data.attributes
    ))


 


    // get users--------------***************
     this.userService.getUsers().subscribe((users)=>(
      this.users=users.map((user)=>({
        id:user.id,
        username:user.username,
        email:user.email,
        phone:user.phone
      }))
      ))
}


  


onsubmit(){
  let myDate = new Date();
  myDate: this.datePipe.transform(myDate, 'yyyy-MM-dd')?.toString()
  let currentUserID= this.ss.getItem('userId')

   this.newComment = {
    data:{
      userID: currentUserID?.toString(),
      carId: this.carID,
      content: this.newComment.data.content,
      date:myDate.toString()}
  };
  this.addComment(this.newComment)
  
}



addComment(comment: PostCommentPayload) {
  this.commentService.postComment(comment)
  .subscribe((comment) => this.comments.push(comment));
}


}
