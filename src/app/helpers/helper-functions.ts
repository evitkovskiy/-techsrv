// Whether the input data is json
export function isJsonFunc(value: string): boolean {
    try {
        JSON.parse(value);
    } catch (e) {
        return false;
    }
    return true;
}

// Format data to mm.dd.YYYY

export function formatDate(inputDate: Date): string{
    let date, month, year;
  
    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();

    date = date
          .toString()
          .padStart(2, '0');
  
    month = month
          .toString()
          .padStart(2, '0');
  
    return `${date}.${month}.${year}`;
}

// Format data to 01 july 2022

export function transformDate(startDate: string, endDate: string): string {
    const months =  [
      'января', 'февраля', 'марта',
      'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября',
      'октября', 'ноября', 'декабря'
    ]
    const dateStart = new Date(startDate);
    const dateEnd = new Date(endDate);
    return `${dateStart.getDate()} ${months[dateStart.getMonth()]} ${dateStart.getFullYear()} - ${dateEnd.getDate()} ${months[dateEnd.getMonth()]} ${dateEnd.getFullYear()}`;
}

// *ngFor optimization
export function trackItem(index: number, item: any): any {
    return item ? item.id : null;
}