import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface UseProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?   : number;
    initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: UseProductArgs ) => {
    
    const [ counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef( false );

    useEffect(() => {
        
        if( !isMounted.current ) return;

        setCounter( value );

    }, [ value ]);

    useEffect( () => {
        isMounted.current = true;
    }, []);
    

    const increaseBy = ( value: number ) => {
        
        let newValue = Math.max( counter + value, 0 );
        
        if( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount );
        }

        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    return {
        counter, 
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset,
    }
}