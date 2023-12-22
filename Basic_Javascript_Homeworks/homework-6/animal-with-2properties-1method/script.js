class Animal {
        constructor (name, kind){
            this.name = name;
            this.kind = kind;
        }
    
        speak(){
            console.log(`${this.name} ${this.kind} 'Hey bro!!!' `);
        }
    }
    
const animal1 = new Animal('Dog', 'says:');

animal1.speak();

