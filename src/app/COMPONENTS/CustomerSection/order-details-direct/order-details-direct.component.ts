import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { LoginService } from 'src/app/SERVICES/AccountService/login.service';
import { ProductServiceService } from 'src/app/SERVICES/AdminService/product-service.service';
import { CartService } from 'src/app/SERVICES/CustomerService/cart.service';

@Component({
  selector: 'app-order-details-direct',
  templateUrl: './order-details-direct.component.html',
  styleUrls: ['./order-details-direct.component.css']
})
export class OrderDetailsDirectComponent implements OnInit {
product:any;
  constructor(public activatedRoute:ActivatedRoute, private cartService: CartService, public loginService: LoginService,public prodService:ProductServiceService) { }
id:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id=params.get('id');

      });
      this.getProductById( this.id);
  }
  getProductById(id:any){
    this.prodService.getProductById(id).subscribe((res)=>{
      this.product=res;
    })
  }

  @ViewChild('content', { static: false }) el!: ElementRef

  title = 'Angular CLI 14 & jsPDF';

  makePdf() {
    let pdf = new jsPDF('p', 'pt', 'a4');

    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("receipt.pdf")
      }
    })

  }
}
