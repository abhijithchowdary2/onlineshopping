import { Component, OnInit, HostListener } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges{
  screenHeight: any;
  screenWidth: any;
  isMenuOpen = false;
  isMobile = false;
  isLoggedIn = false;
  dropdownVisible = false;
  cartData: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth > 768) this.isMobile = false;
    else this.isMobile = true;
  }

  public totalItem : number =0;
  public cart : any =[];
  public searchTerm !: string;

  constructor(
    private cartService:CartServiceService,
    private _token: TokenStorageService,
    private _auth: AuthService,) { }

  ngOnInit(): void {
    this.cart = this.cartService.getItems()
    this.totalItem = this.cart.length
    console.log(this.cart)

  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
