/**
 * Item unit testing
 */

'use strict';

import chai from 'chai';
import { ItemModel } from '../../../api/models/Item';

let expect = chai.expect;

describe('A new Item model', () => {
    let item;

    before(() => {
        item = new ItemModel({ name: 'Crazy' });
    });

    describe('#id', () => {
        it('should have an id', () => {
            expect(item.id).to.not.be.null;
        });
    });

    describe('#name', () => {
        it('should have a name', () => {
            expect(item.name).to.equal('Crazy');
        });

        it('should be able to be changed', () => {
            item.changeName('Chicken');
            expect(item.name).to.equal('Chicken');
        });

        it('should not be able to be set as null', () => {
            expect(() => { item.changeName(null); }).to.throw(Error);
        });
    });
});