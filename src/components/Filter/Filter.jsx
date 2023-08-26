import { Label } from 'components/ContactForm/ContactForm.styled';
import { SearchInput, SearchWrapper } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <SearchWrapper>
      <Label>
        Find contacts by name
        <SearchInput type="text" value={value} onChange={onChange} />
      </Label>
    </SearchWrapper>
  );
};
