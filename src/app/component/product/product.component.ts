import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Car, CarResponse } from 'src/app/data/models/cars';
import { SearchValue, SearchValueResponse } from 'src/app/data/models/search';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { CarService } from 'src/app/data/service/cars.service';
import {cloneDeep} from 'lodash';
import { filter } from 'rxjs/operators'
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
export interface logos{
  name: string,
  path: string
}[]
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  cars:Car[]=[]
  x:Car[]=[]

  searchValue:SearchValueResponse={
    maker:" ",
    location:" ",
    model:" ",
    year: 0,
    // minPrice:0,
    // maxPrice:10000000,
    // state:"   ",
  }
  makers:any[]=[" Mercedes-Benz","Lamborghini","Bentley","Porsche","bmw","dodg","Rolls Royce"]
  models:any[]=[]
  years:number[]=[]
  locations:string[]=[] 



  logo:logos[]=[
    {name:"bentley",path:"../../../assets/images/logo/bentley-logo.png"},
    {name:"mercedes",path:"../../../assets/images/logo/mercedes-.png"},
    {name:"bmw",path:"../../../assets/images/logo/bmw-brand-logo-0.png"},
    {name:"Dodge",path: "../../../assets/images/logo/Dodge-logo-91321131BF-seeklogo.com.png"  },
    {name:"hummer",path:"../../../assets/images/logo/hummer-.png"},
    {name:"Cadillac",path:"../../../assets/images/logo/Cadillac-.png"},
    {name:"lamborghin",path:  "../../../assets/images/logo/lamborghin.png"},
    {name:"ferrari",path:"../../../assets/images/logo/ferrari-logo-png.png" },
    {name:"porsche",path:"../../../assets/images/logo/porsche-logo-2100x1100.png"},
    {name:"Volkswagen",path:"../../../assets/images/logo/Volkswagen.png"},
    {name:"Jeep",path:"../../../assets/images/logo/Jeep_logo.svg.png"},
    ]

  constructor(private activatedRouter:ActivatedRoute, private carService:CarService,private router:Router) { }
  ngOnInit(): void {
    
    
    // this.activatedRouter.paramMap.subscribe((parmas:ParamMap)=>{
    //   this.searchValue.maker= parmas.get("maker");
    //   this.searchValue.model= parmas.get("model");
    //   this.searchValue.location= parmas.get("location");
    //   this.searchValue.year= parmas.get("year");
    //   this.filterProject()

    // })

      // this.activatedRouter.queryParams.subscribe((parmas)=>{
      //   this.searchValue.maker= parmas['searchValue'].maker;
      //   this.searchValue.model= parmas['searchValue'].model;
      //   this.searchValue.location= parmas['searchValue'].location;
      //   this.searchValue.year= parmas['searchValue'].year;
      //   console.log("aaaa");
        
      //   this.filterProject()

      // })

// this.activatedRouter.queryParams.pipe(filter(params=> params['searchValue'])).subscribe(params =>{
//   this.searchValue.maker=params['searchValue'].maker;
//   this.searchValue.location=params['searchValue'].location;;
//   this.searchValue.model=params['searchValue'].model;
//   this.searchValue.year=params['searchValue'].year;
//   console.log("aaaaaaaa");
//   this.filterProject()
// })


this.getcars()
    
    }
  
getcars(){
  return(
  this.carService.getCars().subscribe((cars)=>(
    this.cars=cars.data.map((car)=>({
      id:car.id,
      name: car.attributes.name,
      maker:car.attributes.maker,
      location:car.attributes.location,
      description:car.attributes.description,
      videoLink:car.attributes.videoLink,
      img1:car.attributes.img1,
      img2:car.attributes.img2,
      img3:car.attributes.img3,
      img4:car.attributes.img4,
      img5:car.attributes.img5,
      img6:car.attributes.img6,
      img7:car.attributes.img7,
      img8:car.attributes.img8,
      img9:car.attributes.img9,
      model:car.attributes.model,
      year: car.attributes.year,
      mileage:car.attributes.mileage,
      Transmission:car.attributes.Transmission,
      Cylinders:car.attributes.Cylinders,
      type:car.attributes.type,
      Doors:car.attributes.Doors,
      Color:car.attributes.Color,
      Fuel:car.attributes.Fuel,
    }),    
    )))
    )
}



do(){
  for (const car of this.cars) {
    if (this.makers.includes(car.maker)==false) {
      this.makers.push(car.maker)
    }}
  }

  selectbrand(selectedbrand:string){
    this.models=[]
    this.years=[]
    this.locations=[]
    this.searchValue.maker=selectedbrand
    for (const car of this.cars) {
      if (this.searchValue.maker==car.maker) {
        if (this.models.includes(car.model) ===false){
          this.models.push(car.model)
        }
        if (this.locations.includes(car.location) ===false){
          this.locations.push(car.location)
        }
        if (this.years.includes(car.year) ===false){
          this.years.push(car.year)
        }}}
      }

  selectmodel(model:string,){
    this.searchValue.model=model
  }
  selectyear(year:any){
    this.searchValue.year=year
  }
  selectlocation(location:string){
  this.searchValue.location=location
  }

toCar(car:Car){
this.router.navigate(["/product",car.id]);
}

filterProject(){
  this.cars= this.filterCars()
  
    }
filterCars(){
    return this.cars.filter((product) => 
    { 
      return(
        product.maker.toLowerCase().indexOf( this.searchValue.maker?.toLowerCase())!=-1 ||
        product.model.toLowerCase().indexOf( this.searchValue.model?.toLowerCase())!=-1 &&
        product.location.toLowerCase().indexOf( this.searchValue.location?.toLowerCase())!=-1 &&
        product.year.toString().indexOf( this.searchValue.year?.toLowerCase())!=-1 
        )}
        )
       }


filter(value:string){
  let filterText=value
  this.cars= this.filterProjectByLogo(filterText)
    }
filterProjectByLogo(filterTerm: string ){
 
    return this.cars.filter((product) => 
    { 
      return product.maker.toLowerCase().indexOf( filterTerm?.toLowerCase())!=-1
    })}
    submitData(){
      console.log(this.searchValue);
      
    }

}
