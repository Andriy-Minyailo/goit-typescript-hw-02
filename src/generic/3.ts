/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, Y extends object>(objA: T, objB: Y): T & Y {
  return Object.assign(objA, objB);
}

export {};
