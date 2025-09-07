import { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import { products } from '../data';

const Store = () => {
    type ViewType = 'grid' | 'list';

    const [viewType, setViewType] = useState<ViewType>('grid');

    const handleSwitch = () => {
        setViewType(viewType === 'list' ? 'grid' : 'list');
    };

    return (
        <div>
            <IconSwitch
                icon={viewType === 'list' ? 'view_module' : 'view_list'}
                onSwitch={handleSwitch}
            />
            {viewType === 'grid' ? (
                <CardsView cards={products} />
            ) : (
                <ListView items={products} />
            )}
        </div>
    );
};

export default Store;
