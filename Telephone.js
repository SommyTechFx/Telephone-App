class Observer{
    type = ''
    constructor(subject, type) {
        this.type = type
        subject.addObserver(this)
    }

    notify(data = null) {
        if (this.type == 'dailing') {
            console.log("Now Dailing 2347023232")
        } else {
            console.log(data)  
        }
    }
}


class Telephone {
    phoneNumbers = []

    observers = [] // of format [observer]

    AddPhoneNumber(phoneNumber) {
        if (!this.phoneNumbers.includes(phoneNumber)) {
            this.phoneNumbers.push(phoneNumber)
        }
    }

    RemovePhoneNumber(phoneNumber) {
        let index = this.phoneNumbers.indexOf(phoneNumber);

        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
        }
    }

    DailPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            // console.log('Dailing', phoneNumber)
            this.notify(phoneNumber);
        } else {
            console.log(phoneNumber, 'not found')
        }
    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        if (this.observers.includes(observer)) {  
            let index = this.observers.indexOf(observer);
            if (index !== -1) {
                this.observers.splice(index, 1);
            }
        }
    }

    notify(data) {
        for (const observer of this.observers) {
            observer.notify(data)
        }
    }
}

let telephone = new Telephone()

let observer1 = new Observer(telephone, 'phone_number')
let observer2 = new Observer(telephone, 'dailing')


telephone.AddPhoneNumber('0907889299')
telephone.AddPhoneNumber('07037383883')
telephone.DailPhoneNumber('0907889299')