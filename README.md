QUESTION NO 1: What are some differences between interfaces and types in TypeScript?

Interface ঃ
১। Interface সাধারণত object-এর shape নির্ধারণ করতে ব্যবহৃত হয়। 

২। class, object structure, এবং OOP concept (inheritance) support করে।

৩। Extends keyword দিয়ে multiple interface inherit করা যায়। 

৪। Same নামের একাধিক interface declare করলে automatically merge হয়।

৫। মূলত object, class structure define করার জন্য ভালো।

উদাহরণ ১: Object-এর Shape নির্ধারণ ঃ
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Ridoan",
  age: 20
};

উদাহরণ ২: Interface + Class (implements)

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


Type ঃ

১। Type দিয়ে object, union, tuple, primitive সব define করা যায়।

২। Interface এর মতো inheritance করতে intersection (&) ব্যবহার করতে হয়।

৩। Type merge হয় না—same name দিলে error আসে।

৪। Type বেশি flexible, কারণ union এবং tuple Type-এ define করা যায়।


উদাহরণ ১: Object Shape
type User = {
  name: string;
  age: number;
};

const person: User = {
  name: "Ridoan",
  age: 20
};


উদাহরণ ২: Union Type
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";


উপসংহার ঃ 
১। সংক্ষেপে বলতে গেলে Interface structured object ও class design-এর জন্য best আর Type flexible type composition-এর জন্য।

২। Interface এবং Type দুটোই TypeScript-এর শক্তিশালী tools ব্যবহার পরিস্থিতি অনুযায়ী সঠিকটি নির্বাচন করা সবচেয়ে গুরুত্বপূর্ণ।

৩। যখন object বা class-এর structure define করতে হয় তখন Interface; আর যখন union, tuple বা complex type তৈরি করতে হয় তখন Type ব্যবহার করা উত্তম।

৪। Interface-এ inheritance এবং auto-merge সুবিধা আছে আর Type-এ flexibility এবং union/intersection সুবিধা।

৫। সঠিক ব্যবহারের মাধ্যমে Interface এবং Type দুটোই TypeScript কোডকে আরও readable এবং maintainable করে তোলে।



QUESTION NO 4ঃ What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enum হলো TypeScript-এর একটি বিশেষ non-primitive data type যা আমরা ব্যবহার করি related constant values একত্রে সংগঠিত করে রাখার জন্য। সাধারণ ভ্যালুর পরিবর্তে Meaningfull নাম ব্যবহার করলে কোড অনেক বেশি readable হয়, ভুল কম হয়, আর বড় প্রজেক্টে consistency বজায় রাখা সহজ হয়।  


TypeScript-এ enum ব্যবহার করলে ঃ

১। কোড self documented হয়ে যায়
২। Code Readability বাড়ায়
৩। Autocomplete এবং type safety পাওয়া যায়
৪। ভুল বানান বা ভুল মান ব্যবহারের সম্ভাবনা কমে
৫। random string ব্যবহারের ঝামেলা কমে

Numeric Enum উদাহরণ:

enum Direction {
  Up = 1,     
  Down,   
  Left,  
  Right   
}

console.log(Direction.Up);    
console.log(Direction.Right); 

এখানে Up = 1, কিন্তু Down = 2, Left = 3, Right = 4 স্বয়ংক্রিয়ভাবে সেট হয়ে গেছে। নেটওয়ার্ক স্টেট, রিকোয়েস্ট স্ট্যাটাস ইত্যাদির ক্ষেত্রে numeric enum বেশ ব্যবহার হয়।


String Enum উদাহরণ:

String enum এ প্রতিটি মান manually string আকারে দিতে হয়। এগুলো প্রোডাকশন কোডে খুব Popular কারণ আউটপুট readable এবং debug friendly।

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}


String enum ব্যবহার করলে readability অনেক বেড়ে যায় এবং ভুল কমায় আর কাজ করা সহজ হয়। প্রতিটি সদস্যের মান নির্দিষ্টভাবে string হয়।