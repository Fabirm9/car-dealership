import { v4 as uuid } from 'uuid';

import { Brand } from 'src/brands/entities/brand.entity';

export const BRAND_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Audi',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Chevrolet',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Ferrari',
        createdAt: new Date().getTime()
    }
]