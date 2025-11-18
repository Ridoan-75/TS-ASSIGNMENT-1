## প্রশ্ন ১: TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য কী?

### Interface

1. Interface সাধারণত object-এর shape নির্ধারণ করতে ব্যবহৃত হয়।

2. class, object structure, এবং OOP concept (inheritance) support করে।

3. Extends keyword দিয়ে multiple interface inherit করা যায়।

4. Same নামের একাধিক interface declare করলে automatically merge হয়।

5. মূলত object, class structure define করার জন্য ভালো।

#### উদাহরণ ১: Object এর Shape নির্ধারণ

```typescript
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Ridoan",
  age: 20
};
```

#### উদাহরণ ২: Interface + Class (implements)

```typescript
interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name = "German Shepherd";
  sound() {
    console.log("Woof!");
  }
}
```

---

### Type

1. Type দিয়ে object, union, tuple, primitive সব define করা যায়।

2. Interface এর মতো inheritance করতে intersection (&) ব্যবহার করতে হয়।

3. Type merge হয় না same name দিলে error আসে।

4. Type বেশি flexible, কারণ union এবং tuple Type-এ define করা যায়।

#### উদাহরণ ১: Object Shape

```typescript
type User = {
  name: string;
  age: number;
};

const person: User = {
  name: "Ridoan",
  age: 20
};
```

#### উদাহরণ ২: Union Type

```typescript
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
```

---

### উপসংহার

1. সংক্ষেপে বলতে গেলে Interface structured object ও class design-এর জন্য best আর Type flexible type composition-এর জন্য।

2. Interface এবং Type দুটোই TypeScript-এর শক্তিশালী tools ব্যবহার পরিস্থিতি অনুযায়ী সঠিকটি নির্বাচন করা সবচেয়ে গুরুত্বপূর্ণ।

3. যখন object বা class-এর structure define করতে হয় তখন Interface আর যখন union, tuple বা complex type তৈরি করতে হয় তখন Type ব্যবহার করা উত্তম।

4. Interface-এ inheritance এবং auto-merge সুবিধা আছে আর Type-এ flexibility এবং union/intersection সুবিধা।

5. সঠিক ব্যবহারের মাধ্যমে Interface এবং Type দুটোই TypeScript কোডকে আরও readable এবং maintainable করে তোলে।

---

## প্রশ্ন ৪: TypeScript-এ Enum কী এবং এর ব্যবহার কী?

### Enum কী?

Enum হলো TypeScript-এর একটি বিশেষ non-primitive data type যা আমরা ব্যবহার করি related constant values একত্রে সংগঠিত করে রাখার জন্য। সাধারণ ভ্যালুর পরিবর্তে Meaningful নাম ব্যবহার করলে কোড অনেক বেশি readable হয়, ভুল কম হয়, আর বড় প্রজেক্টে consistency বজায় রাখা সহজ হয়।

### TypeScript এ Enum ব্যবহার করলে:

1. কোড self documented হয়ে যায়

2. Code Readability বাড়ায়

3. Autocomplete এবং type safety পাওয়া যায়

4. ভুল বানান বা ভুল মান ব্যবহারের সম্ভাবনা কমে

5. Random string ব্যবহারের ঝামেলা কমে

---

### Numeric Enum

Numeric enum-এ প্রথম মান set করে দিলে বাকিগুলো স্বয়ংক্রিয়ভাবে increment হয়। নেটওয়ার্ক স্টেট, রিকোয়েস্ট স্ট্যাটাস ইত্যাদির ক্ষেত্রে numeric enum বেশ ব্যবহার হয়।

#### উদাহরণ:

```typescript
enum Direction {
  Up = 1,     
  Down,   // 2
  Left,   // 3
  Right   // 4
}

console.log(Direction.Up);    // Output: 1
console.log(Direction.Right); // Output: 4
```

এখানে Up = 1, কিন্তু Down = 2, Left = 3, Right = 4 স্বয়ংক্রিয়ভাবে সেট হয়ে গেছে।

---

### String Enum

String enum এ প্রতিটি মান manually string আকারে দিতে হয়। এগুলো প্রোডাকশন কোডে খুব Popular কারণ আউটপুট readable এবং debug friendly।

#### উদাহরণ:

```typescript
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

console.log(Role.Admin); // Output: "ADMIN"
```

String enum ব্যবহার করলে readability অনেক বেড়ে যায় এবং ভুল কমায় আর কাজ করা সহজ হয়। প্রতিটি সদস্যের মান নির্দিষ্টভাবে string হয়।
