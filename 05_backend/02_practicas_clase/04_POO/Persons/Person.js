class Person {
    constructor(name, surname, birthdate, age, dni){
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.age = age;
        this.dni = dni;
    }



    // Metodos
    legalAge() {
        if (this.age >= 18) {
        console.log('Es mayor de edad');
        } else {
        console.log('Es menor de edad');
        }
    }

    birth() {
        let birthdate = new Date(this.birthdate);
        let today = new Date();

        if (today.getDate() == birthdate.getDate() && today.getMonth() == birthdate.getMonth()) {
        console.log('Hoy es su cumpleaños');
        } else {
        console.log('Hoy no es su cumpleaños');
        }
    }
}

export default Person