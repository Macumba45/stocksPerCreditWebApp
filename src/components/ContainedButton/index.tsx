import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
    const buttonStyle = {
        backgroundColor: '#7E1B75',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '5px',
        padding: '10px 20px',
        boxShadow: 'none',
        margin:'auto;'
      };
    

  return (
    <Stack direction="column" spacing={2}>
      <Button variant="contained" style={buttonStyle}>Submit</Button>
    </Stack>
  );
}
