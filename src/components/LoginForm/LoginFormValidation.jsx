export const uncorrect = () => {
  document.querySelector('#loginEmailLabel').style.borderBottom =
    '1px solid tomato';
  document.querySelector('#loginPasswordLabel').style.borderBottom =
    '1px solid tomato';
  document.querySelector('#loginEmailLabel').style.fill = 'rgb(209 58 58)';
  document.querySelector('#loginPasswordLabel').style.fill = 'rgb(209 58 58)';
  document.querySelector('#loginEmailLabel').style.color = 'rgb(209 58 58)';
  document.querySelector('#loginPasswordLabel').style.color = 'rgb(209 58 58)';
};
export const initial = () => {
  document.querySelector('#loginEmailLabel').style.borderBottom =
    '1px solid rgb(224, 224, 224)';
  document.querySelector('#loginEmailLabel').style.fill = 'rgb(224, 224, 224)';
  document.querySelector('#loginEmailLabel').style.color = 'rgb(224, 224, 224)';
  document.querySelector('#loginPasswordLabel').style.borderBottom =
    '1px solid rgb(224, 224, 224)';
  document.querySelector('#loginPasswordLabel').style.fill =
    'rgb(224, 224, 224)';
  document.querySelector('#loginPasswordLabel').style.color =
    'rgb(224, 224, 224)';
};
