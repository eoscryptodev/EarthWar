import { Injectable } from '@angular/core';
import { PreloaderBuilder} from '../../Shared/builder';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  private preloadImage = PreloaderBuilder.create({
    image: 'https://www.benjerry.com/files/live/sites/systemsite/files/whats-new/4237-black-lives-matter/BLM-solid-1200x630.png'
  });
  private preloadImage2 = PreloaderBuilder.create({
    image: 'https://d279m997dpfwgl.cloudfront.net/wp/2020/06/GettyImages-1221138690-1000x667.jpg'
  });

  constructor()
  {

  }

  getPreloadImage(): string
  {
    return this.preloadImage.image;
  }
  getPreloadImage2(): string
  {
    return this.preloadImage2.image;
  }
}
