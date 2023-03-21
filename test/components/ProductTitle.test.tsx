import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src';
import { product } from '../data/product';

describe('Product Title', () => {
    
    test('Debe mostrar el componente correctamente con su titulo', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' />
        );
        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('Debe mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );
        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

})