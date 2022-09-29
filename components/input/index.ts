import type { App, Plugin } from 'vue';
import Input from './Input';
import Group from './Group';
import Search from './Search';
import TextArea from './TextArea';
import Password from './Password';
import SearchInput from './SearchInput';

export type { InputProps, TextAreaProps } from './inputProps';
Input.Group = Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = Password;
Input.SearchInput = SearchInput

/* istanbul ignore next */
Input.install = function (app: App) {
  app.component(Input.name, Input);
  app.component(Input.Group.name, Input.Group);
  app.component(Input.Search.name, Input.Search);
  app.component(Input.TextArea.name, Input.TextArea);
  app.component(Input.Password.name, Input.Password);
  app.component(Input.SearchInput.name, Input.SearchInput);
  return app;
};

export {
  Group as InputGroup,
  Search as InputSearch,
  TextArea as Textarea,
  Password as InputPassword,
  SearchInput as SearchInput,
};

export default Input as typeof Input &
  Plugin & {
    readonly Group: typeof Group;
    readonly Search: typeof Search;
    readonly TextArea: typeof TextArea;
    readonly Password: typeof Password;
    readonly SearchInput: typeof SearchInput;
  };
