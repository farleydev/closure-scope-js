const fruits = () => {
    if (true){
        var fruit1 = 'apple';
        var fruit2 = 'banana';
        var fruit3 = 'orange';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

// Este seria otro scope
const fruits = () => {
    if (true){
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'orange';
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();

// Variables Scope con un for

