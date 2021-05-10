import { Injectable } from '@angular/core';
import { PreloaderBuilder} from '../../Shared/builder';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  private preloadImage = PreloaderBuilder.create({
    image: 'https://images7.alphacoders.com/442/thumb-1920-442794.jpg'
  });
  private preloadImage2 = PreloaderBuilder.create({
    image: 'https://images3.alphacoders.com/953/thumb-1920-95395.jpg'
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
