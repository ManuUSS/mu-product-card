# MU-product-card
Paquete de pruebas de despliegue en NPM.

### Manuel Ulate Sancho

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mu-product-card';

<ProductCard  
  product={ product } 
  style={{ backgroundColor: '#70D1F8'}}
  initialValues={{ count: 4, maxCount: 10 }}
>
  {
    ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>   
``` 