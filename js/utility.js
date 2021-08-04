const stringifyDate = (date) => {
    console.log(new Date(date).toString("yyyy MM DD"));
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const newDate = !date ? "undefined" : new Date(date).toLocaleDateString('en-GB', options);
    return newDate;
}