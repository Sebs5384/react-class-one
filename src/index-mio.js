//Tarea 1

/*import { Tarjeta } from './components/Tarjeta.js';
ReactDOM.render(
  <Tarjeta nombre="Sebastian" profesion="Desarrollador" imagen="https://avatars.githubusercontent.com/u/120617688?v=4" />,
  document.querySelector('#react-app')
);*/

/*import { BlogPost } from './components/BlogPost.js';
ReactDOM.render(
  <BlogPost
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla.\n
    La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\n
    Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
      nombre: 'Sebastian',
      profesion: 'Desarrollador',
      imagen: 'https://avatars.githubusercontent.com/u/120617688?v=4',
    }}
  />,
  document.querySelector('#react-app')
);*/

//Tarea 2

/*import { MatchNombre } from './components/MatchNombre.js';
ReactDOM.render(<MatchNombre nombre='Sebastian' />, document.querySelector('#react-app'));*/

/*import { PasswordInput } from './components/PasswordInput.js';

ReactDOM.render(<PasswordInput minLength={8} />, document.querySelector('#react-app'));*/

/*import { ValidationInput } from './components/ValidationInput.js';

ReactDOM.render(<ValidationInput minLength={10} />, document.querySelector('#react-app'));*/

/*import { Form } from './components/Form.js';

ReactDOM.render(<Form minLength={10} />, document.querySelector('#react-app'));*/

/*import { UncontrolledCheckbox } from './components/UncontrolledCheckbox.js';

ReactDOM.render(<UncontrolledCheckbox initialValue={false} name="ID Check" />, document.querySelector('#react-app'));*/

/*import { CheckboxList } from './components/CheckboxList.js';

ReactDOM.render(
  <CheckboxList
    items={{
      one: false,
      two: true,
      three: false,
      four: true,
      five: true,
    }}
  />,
  document.querySelector('#react-app')
);*/

import { CheckboxListWithState } from './components/CheckboxListWithState.js';

ReactDOM.render(<CheckboxListWithState items={{ one: true, two: false, three: false }} />, document.querySelector('#react-app'));
