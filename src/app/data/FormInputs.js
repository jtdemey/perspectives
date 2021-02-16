const g = (type, label) => ({ type, label });

const formInputs = {
  //Fullscreen
  cube: [
    g('text', 'Text'),
    g('text', 'Color (hex)')
  ],
  towers: [
    g('text', 'Text'),
    g('text', 'Color (hex)')
  ],
  //Overlay
  border: [
    g('text', 'Color 1 (hex)'),
    g('text', 'Color 2 (hex)')
  ]
};

export const getFormInputs = formType => formInputs[formType] ?? [];