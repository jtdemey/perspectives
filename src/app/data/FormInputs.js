const g = (type, label) => ({ type, label });

const formInputs = {
  cube: [
    g('text', 'Text'),
    g('color', 'Color')
  ],
  towers: [
    g('text', 'Text'),
    g('color', 'Color')
  ]
};

export const getFormInputs = formType => formInputs[formType] ?? [];