const useSizes = (products) => {
  return products.reduce((acc, product) => {
    product?.variants?.sizes.forEach((size) => {
      const existing = acc.find((s) => s.name === size);
      if (existing) {
        existing.count += 1;
      } else {
        acc.push({ name: size, count: 1 });
      }
    });

    return acc;
  }, []);
};

export default useSizes;
