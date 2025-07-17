import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import api from '../../api';
import ProductCard from './ProductCard';  

const ProductList = () => {
  const [products, setProducts] = useState([]);

  //implement the get products function
  const fetchProducts = async () => {
    try {
      const res = await api.get('/products');
      console.log('Fetched products:', res.data);
      setProducts(res.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  //implement the delete function
  const handleDelete = async (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    try {
      await api.delete(`/products/${id}`);
    } catch (err) {
      console.error(`Failed to delete product ${id}:`, err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Loading state
  if (products.length === 0) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h6">Loading products…</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Simple Card List
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {products.map(product => (
          <Grid 
              item 
              key={product.id} 
              xs={12}   
              sm={6}    
              md={4}    
            >

            <ProductCard
              product={product}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
