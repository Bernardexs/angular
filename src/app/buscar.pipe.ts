import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter(item => {
      console.log(item)
      const fullName = `${item.empleado.usuario.nombre} ${item.empleado.usuario.apellido}`.toLowerCase();
      return fullName.includes(searchText.toLowerCase());
    });
  }
}
