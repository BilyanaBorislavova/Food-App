import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HandlerInterceptorService implements HttpInterceptor {
  constructor(public toasterService: ToastrService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   return next.handle(req).pipe(tap((response) => {
      if(response instanceof HttpResponse) {
        const url = response.url;
        if(url.endsWith('login') || url.endsWith('register') ||  url.endsWith('createRecipe') || url.includes('edit') || url.includes('delete') || url.includes('remove') || url.includes('add') || url.includes('createProduct') || url.includes('createCategory')){
          this.toasterService.success(response.body.message, 'Success')
        }
      }
   }), catchError((err) => {
     this.toasterService.error(err.error.message, 'Error');
     throw err;
   }))
  }
}
