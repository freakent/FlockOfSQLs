var YAML = require('yamljs')

module.exports = function(file, set) {

    this.set = set || ''
    var self = this
    var flock = YAML.load(file)

//    console.log('building flock for %s', set)

    var data = {}

    for(x = 0; x < flock.length; x++) {
//        console.log('>', flock[x])

        if (flock[x][set]){
//          console.log('return', flock[x][set].sql)
            data[flock[x].name] = flock[x][set].sql
        } else {
//          console.log('return', flock[x].sql)
            data[flock[x].name] = flock[x].sql
        }
    }

    console.log('flock %s', set, data)

    return function(name) {
        this.data = data
        return (typeof data[name] === 'undefined') ? null : data[name]
    }
}
