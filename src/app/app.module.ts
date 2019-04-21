import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { ToastrModule } from "ngx-toastr";
import { MaterialModule } from "./core/modules/material.module";
import { FoodModule } from "./core/modules/food.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./components/authentication/register/register.component";
import { LoginComponent } from "./components/authentication/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { NavigationComponent } from "./components/shared/navigation/navigation/navigation.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AdminGuard } from "./core/guards/admin.guard";
import { IsAuthGuard } from "./core/guards/is-auth.guard";
import { AnonymousGuard } from "./core/guards/anonymous.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthInterceptorService } from "./core/interceptors/auth-interceptor.service";
import { HandlerInterceptorService } from "./core/interceptors/handler-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    FoodModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AdminGuard,
    IsAuthGuard,
    AnonymousGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandlerInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
