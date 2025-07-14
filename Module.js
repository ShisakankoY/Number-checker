function isEven() {
    const num = Number(document.getElementById("test").value);
    return isNaN(num)
        ? 'NaN'
        : num % 2 === 0
            ? 'Even'
            : 'Odd';
}

export { isEven };