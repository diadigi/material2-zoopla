import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'postcodeFromLink'})
export class PostcodeFromLink implements PipeTransform {
  transform(value: string): string {
    return value.split("/").pop().replace("-"," ");
  }
}
