import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentlanguage!:string;

  constructor(@Inject(DOCUMENT)private document: Document,
    public translate:TranslateService ) { 
  this.currentlanguage=localStorage.getItem('currentlanguage')||'en';
  this.translate.use(this.currentlanguage)
}

  ngOnInit(): void {
    const lang = localStorage.getItem("currentlanguage")
    lang && this.document.documentElement.setAttribute("lang",lang)
    lang && this.changelanguage(lang)

  }
  changelanguage(lang:string){
    this.translate.use(lang);
    localStorage.setItem('currentlanguage',lang);
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";

    let logo= this.document.getElementsByClassName("mylogo")[0]as HTMLHtmlElement
    lang === "ar" ?logo.setAttribute('src','"../../../assets/images/logoar.png'):logo.setAttribute('src','"../../../assets/images/logoen.png');

    lang==="ar"? this.document.body.classList.add("arabic"): this.document.body.classList.remove("arabic") 

  }




    // changeLogo(lang: string) {
    //   let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    //   let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    //   let bundleName = lang === "ar" ?       "arabicStyle.css":"englishStyle.css";
    //   if (existingLink) {
    //      existingLink.href = bundleName;
    //   } else {
    //      let newLink = this.document.createElement("link");
    //      newLink.rel = "stylesheet";
    //      newLink.type = "text/css";
    //      newLink.id = "langCss";
    //      newLink.href = bundleName;
    //      headTag.appendChild(newLink);
    //   }
    //   }
    
}


