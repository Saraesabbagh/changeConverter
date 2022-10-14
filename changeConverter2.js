const changeConverter2 = (pounds_number) => {
    if (pounds_number == 50.00) {
        return ['£50'];
    } else if (pounds_number == 100.00) {
        return ['£50', '£50'];
    };
        
}

module.exports= changeConverter2;