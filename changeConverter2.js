const changeConverter2 = (pounds_number) => {
    const pound_notes = [50.00, 20.00, 10.00, 5.00]
    const change = []
    if (pound_notes.includes(pounds_number)) {
        change.push("£"+Math.floor(pounds_number))
        return change;
    } else {
        for (let i = 0; i < pound_notes.length; i++) {
            // output is a number - float
            const num = pounds_number / pound_notes[i]

            if (Number.isInteger(num)) {
                
                change.push(("£"+pound_notes[i])* num) 
            }
        }
        return change
    }
        
}

module.exports= changeConverter2;