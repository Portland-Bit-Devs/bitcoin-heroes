import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle',
})
export class ShufflePipe implements PipeTransform {

  transform(input: any): any {
 const shuffledArray = [];
    const seenIndexes = new Set<number>();

    while (seenIndexes.size < input.length) {
      const randomIndex = Math.floor(Math.random() * input.length);
      if (!seenIndexes.has(randomIndex)) {
        shuffledArray.push(input[randomIndex]);
        seenIndexes.add(randomIndex);
      }
    }
    return shuffledArray;
  }

}
