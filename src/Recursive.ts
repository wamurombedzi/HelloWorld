interface Category {
    name: string;
    subcategories?: Category[];
}

const categories: Category = {
    name: 'Electronics',
    subcategories: [
        { name: 'Laptops' },
        { name: 'Phones', subcategories: [{name: 'Smartphones'}]},
    ]
}
console.log(categories.name);
