function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};





function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};







class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
};






type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
};







type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
};







interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(myBook: Book) {
  console.log(
    `Title: ${myBook.title}, Author: ${myBook.author}, Published: ${
      myBook.publishedYear
    },  Available: ${myBook.isAvailable ? "Yes" : "No"}`
  );
};








function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];

  function addIfUnique(value: string | number) {
    let found = false;

    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(value);
    }
  }

  function processArray(arr: (string | number)[]) {
    for (let i = 0; i < arr.length; i++) {
      addIfUnique(arr[i]);
    }
  }

  processArray(arr1);
  processArray(arr2);

  return result;
};








type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const total = product.price * product.quantity;
      if (product.discount) {
        const discountAmount = total * (product.discount /100);
        return total - discountAmount;
      }
      return total;
    })
    .reduce((sum, value) => sum + value, 0);
};
