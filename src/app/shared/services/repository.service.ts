import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DBFile } from 'src/app/interfaces/DBFile.model';
/**
 * RepositoryServicee prepared to be used by components for CRUD Data operation results on the browser.
 */
@Injectable ()
export class RepositoryService {
    private filesURL: string;


  /**
   * 
   * @param http 
   * We are injecting the 
   * Angular HttpClient and the environment variable into the constructor. 
   * @param environmentUrl 
   */
  constructor(private http: HttpClient, private environmentUrl: EnvironmentUrlService) {
    this.filesURL = "http://localhost:8080/api/files";
   }

  /* Functions to wrap requests */
  /**
   * @param route
   * A wrapper for all GET Requests. It accepts the route parameter of type string (/api/upload)
   * and combines it with the environment variable
   */
  getFilesList(): Observable<DBFile[]> {
    //return this.http.get(this.createCompleteRoute(route, this.environmentUrl.urlAddress));
    return this.http.get<DBFile[]>(this.filesURL);
  
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
 
 

  /**
   * @param route
   * @param body 
   * A wrapper for POST requests. It generates a route, but additionally receives
   * a body (an entity which we are creating) and generate headers.
   * Here we are using the Content-Type inside the header, but if we need additional values inside the header,
   * we could just add nother key-value pair inside the HttpHeaders object.
   */
  
  public create(route: string, body) {
    return this.http.post(this.createCompleteRoute(route, this.environmentUrl.urlAddress), body, this.generateHeaders());
  }

  public update(route: string, body) {
    return this.http.put(this.createCompleteRoute(route, this.environmentUrl.urlAddress), body, this.generateHeaders());
  }

  public delete(route: string) {
    return this.http.delete(this.createCompleteRoute(route, this.environmentUrl.urlAddress));
  }


  private createCompleteRoute(route: string, environmentAddress: string) {
    return `${environmentAddress}/${route}`;
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
   
}
