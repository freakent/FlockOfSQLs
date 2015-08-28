var YAML = require('yamljs')

module.exports = function(set) {

    this.set = set || ''
    var self = this
    var flock = YAML.load('./test/sql.yml')
//    console.log('building flock for %s', set)

    return new instance(set)

    function instance(_set) {
        this.statement = function(name){
//            console.log('looking for name = %s, set = %s', name, _set)

            for(x = 0; x < flock.length; x++) {
                if (flock[x].name === name) {
//                    console.log('found', flock[x])
                    if (flock[x][_set]){
//                        console.log('return', flock[x][_set].sql)
                        return flock[x][_set].sql
                    } else {
//                        console.log('return', flock[x].sql)
                        return flock[x].sql
                    }
                }
            }
//            console.log('return nope')
            return null
        }
    }
}
