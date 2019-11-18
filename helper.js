export const concat = (x) => {
    console.log('concat');
    return `${x} here!!`;

    if (x === 1) {
        return "dead statement!"
    }
}

const doubleConcat = (x) => {
    console.log('doubleConcat');

    return `${x} here!!`;
};
export default doubleConcat;