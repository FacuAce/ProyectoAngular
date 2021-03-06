import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private shoppingCartSvc: ShoppingCartService) { }
  quantity$ = this.shoppingCartSvc.quantityAction$;
  cart$ = this.shoppingCartSvc.cartAction$;
  total$ = this.shoppingCartSvc.totalAction$;

  ngOnInit(): void {
  }

}
