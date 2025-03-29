import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
} from '@mui/material';

export const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    padding: '10px 16px',
    fontSize: '16px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    border: `1px solid ${theme.palette.divider}`,
    '&:focus': {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },
  },
}));
export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  '&.Mui-selected:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.text.primary,
  },
  '& .MuiSelect-select': {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    border: `1px solid ${theme.palette.divider}`,
  },
}));
export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  '&.Mui-focused': {
    color: theme.palette.primary.main,
  },
}));
export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.divider,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
}));
// export const StyledSelectIcon = styled(Selection)(({ theme }) => ({
//   color: theme.palette.text.primary,
// }));
export const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '12px',
}));
