import { Injectable } from "@angular/core";
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";

@Injectable({
  providedIn: "root"
})
export class DynamoWrapperService {
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  URL_BASE = "???????";
  API_KEY = "";
  INSTANCE;

  constructor() {
    this.INSTANCE = axios.create({
      baseURL: this.proxyurl + this.URL_BASE,
      timeout: 10000,
      headers: {}
    });
  }

  async getArticleByProvider(code) {
    let endpoint = '/articles?provider=' + code
    return this.INSTANCE.get(endpoint)
      .then(function(response) {
        return {
          response: response,
          isError: false
        };
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.log("Error", error);
          return {
            response: error,
            isError: true
          };
        } else if (error.request) {
          // The request was made but no response was received
          console.log("Error", error);
          return {
            response: error,
            isError: true
          };
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
          return {
            response: error,
            isError: true
          };
        }
      });
  }

  getTopic(name) {
    return {};
  }

  getArticlesByTopic(topicName) {
    return {};
  }

  getTopTopics() {
    return {};
  }
}
