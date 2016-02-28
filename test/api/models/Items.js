/**
 * Item unit testing
 */

import chai from 'chai';
import ItemModel from '../../../api/models/Item';

let expect = chai.expect;

describe('A new Item model', () => {
    let item;

    before((done) => {
        item = new ItemModel({
            name: 'Crazy'
        });

        done();
    });

    it('should have a name', () => {
        expect(item).to.have.property('name', 'Crazy');
    });
});