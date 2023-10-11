import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'MENU',
    url: '/dashboard',
    iconComponent: {name: 'cil-speedometer'},
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  // {
  //   title: true,
  //   name: 'Registro Postulantes'
  // },
  {
    name: 'Inscripciones',
    url: '/pages/inscriptions',
    iconComponent: {name: 'cil-description'},
    children: [
      {
        name: 'Lista',
        url: '/pages/inscriptions/list',

      },
      {
        name: 'Candidatos',
        url: '/pages/inscriptions/candidates',
      }
    ]
  },
  {
    name: 'Resultados',
    url: '/pages/results',
    iconComponent: {name: 'cil-drop'},
    children: [
      {
        name: 'Candidatos Aptos',
        url: '/pages/results/aptos',

      },
      {
        name: 'Actas',
        url: '/pages/results/actas',

      },
      {
        name: 'Generales',
        url: '/pages/results/general',
      }
    ]
  },
  {
    name: 'Administracion',
    url: '/theme/colors',
    iconComponent: {name: 'cil-settings'}
  },
];
