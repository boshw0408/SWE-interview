import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProductCard({ product, onDelete }) {

  return (
    <Card sx={{ position: 'relative' }}>
      <IconButton
        onClick={() => onDelete(product.id)}
        aria-label="delete"
        sx={{
          position: 'absolute',
          color: 'error.main',
          zIndex: 1
        }}
      >
        <DeleteIcon />
      </IconButton>

      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{product.name}</Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
