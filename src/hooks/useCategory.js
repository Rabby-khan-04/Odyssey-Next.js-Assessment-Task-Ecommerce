const useCategory = (products) => {
  return products.reduce((acc, product) => {
    const category = product.category;
    const existing = acc.find((item) => item.name === category);

    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ name: category, count: 1 });
    }

    return acc;
  }, []);
};

export default useCategory;
