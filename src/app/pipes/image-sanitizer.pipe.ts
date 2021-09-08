import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSanitizer'
})
export class ImageSanitizerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
