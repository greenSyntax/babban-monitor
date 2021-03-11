module.exports = {
    fromJSON: (data) => {
        return JSON.stringify(data)
    },

    toJSON: (data) => {
        return JSON.parse(data)
    },
    
}