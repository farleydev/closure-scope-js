const buildcount = (i) => {
    let count = i;
    const displaycount = () => {
        console.log(count++);
    }
    return displaycount;
};

const mycount = buildcount(5);

mycount();
mycount();
mycount();