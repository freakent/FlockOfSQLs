var expect = require('chai').expect


describe('flock of SQLs', function(){

    describe('for default dialect', function() {
        var SQL = require('../FlockOfSQLs')('./test/sql.yml')

        it('should return named sql statements', function() {

            var sql = SQL.statement('Find countries in Europe')
            expect(sql).to.contain('countries')
            expect(sql).to.not.contain('continent = \'pg\'')

            var sql = SQL.statement('Create a country')
            expect(sql).to.contain('countries')
            expect(sql).to.contain('values')
            expect(sql).to.not.contain('continent = \'pg\'')
        })

    })

    describe('for a specific dialect', function() {
        var SQL = require('../FlockOfSQLs')('test/sql.yml', 'pg')

        it('should return named sql statements', function() {
            var sql = SQL.statement('Find countries in Europe')
            expect(sql).to.contain('countries')
            expect(sql).to.contain('continent = \'pg\'')

            var sql = SQL.statement('Create a country')
            expect(sql).to.contain('countries')
            expect(sql).to.contain('values')
            expect(sql).to.not.contain('continent = \'pg\'')

        })

    })

})
