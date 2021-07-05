class User {
   _name = '';
   //#name = ''; protected

   constructor(name, site, dob) {
      this._name = name;
      this.site = site;
      this.dateOfBirth = dob;
      this.counter = 0;
   }

   get name() {
      return this._name + '!!!';
   }

   set name(value) {
      this._name = value;
   }

   hello() {
      this.counter++;
      console.log(`I am ${this._name} from ${this.site}`);
   }
}

const u1 = new User('Kirill', 'it-incubator', new Date(1989, 4, 27));
const u2 = new User('Kirill', 'it-incubator', new Date(1989, 4, 27));

u1.name = 'Igor';

class Coder  extends User{
   constructor(name, site, dob, tech) {
      super(name, site, dob);
      this.tech = tech;
   }

   code() {
      console.log(`I am ${this.name}, here is my ${this.tech} code: const sum = (a + b) => a + b`)
   }

   hello() {
      super.hello();
      console.log('Go away' + this.name)
   }
}

class Hacker extends Coder {
   constructor(a, b, c, d) {
      super();
      this.tech = 'XXX'
      this.name = 'XXXX'
   }

   code() {
      console.log('I \'ll hack everything')
   }

   hello() {
      // throw new Error('i am Hacker in the Dark')
   }
}

const coder = new Coder('Kirill Coder', 'it-incubator', new Date(1989, 4, 27))

const hacker = new Hacker('Kirill Coder', 'it-incubator', new Date(1989, 4, 27));
hacker.code()
hacker.hello()


let users = [u1, u2, coder, hacker];

users.forEach( u => u.hello());
