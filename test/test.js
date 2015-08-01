/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	data = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-iris', function tests() {

	it( 'should export an object', function test() {
		expect( data ).to.be.an( 'object' );
	});

	it( 'should contain data for Iris setosa', function test() {
		assert.property( data, 'setosa' );
		assert.isObject( data.setosa );
	});

	it( 'should contain data for Iris versicolor', function test() {
		assert.property( data, 'versicolor' );
		assert.isObject( data.versicolor );
	});

	it( 'should contain data for Iris virginica', function test() {
		assert.property( data, 'virginica' );
		assert.isObject( data.virginica );
	});

});
