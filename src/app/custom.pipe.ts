import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'custom' })
export class Custom implements PipeTransform {
    transform(value: string): any {
        let valueToReturn = {}
        for (let i = 0; i < value.length; i++) {
            if (value[i] === 'Eliseo@gardner.biz') {
                valueToReturn += value.charAt(i);
            }
        }
        return valueToReturn;
    }
}