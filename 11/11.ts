type ExtractValue<T> = T[keyof T];

type FormatExcuse<T> = {
    [K in keyof T]: `${K & string}: ${T[K] & string}`;
  }[keyof T];

  type Excuse<T> = new (excuses: Record<string, string | string[]> & T) => FormatExcuse<T>;

  const Excuse = class {
    constructor(excuses: Record<string, string | string[]>) {
      const newExcuse = Object.entries(excuses).slice(-1)[0];
      return `${newExcuse[0]}: ${newExcuse[1]}` as any;
    }
  } as any;
