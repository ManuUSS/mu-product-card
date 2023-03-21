import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src';
import { product2 } from '../data/product';


describe('ProductImage', () => {

    test('', () => {
        
        const wrapper = renderer.create(
            <ProductImage img='https://hola.jpg' />
        )
    
        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('Debe mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );
        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

});