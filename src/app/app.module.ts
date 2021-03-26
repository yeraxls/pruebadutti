import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginRegistroModule } from './modules/login-registro.module';
import { MenuComponent } from './components/menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { miReducer } from './app.Reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    LoginRegistroModule,
    StoreModule.forRoot({
      ships :miReducer,
      planets: miReducer  
    }),
    StoreDevtoolsModule.instrument({
      maxAge : 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
