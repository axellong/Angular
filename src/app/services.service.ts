import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  private REST_API_SERVER = "http://localhost:8000/";

  constructor(private httpClient: HttpClient) {}

  public getProduct(nameEndPoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + nameEndPoint);
  }
  public getOrder(nameEndPoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + nameEndPoint);
  }
  public getProvider(nameEndPoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + nameEndPoint);
  }
  public getSale(nameEndPoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + nameEndPoint);
  }
  public getUser(nameEndPoint: string) {
    return this.httpClient.get(this.REST_API_SERVER + nameEndPoint);
  }
}
