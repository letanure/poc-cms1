const config = {
  name: 'TitleUi',
  label: 'Title',
  description: 'Title of a page or a section',
  icon: 'angle-right',
  group: 'elements',
  listable: true,
  mock: {
    title: 'Main title',
    titleTag: 'h1',
    titleSize: 1,
    subtitle: 'Subtitle',
    subtitleTag: 'h2',
    subtitleSize: 2,
    spaced: false,
  },
  form: {
    header: {
      title: 'Title Element',
    },
    fields: [
      {
        addons: 'addons',
        controls: [
          {
            label: 'Main title text',
            name: 'title',
            type: 'text',
            validations: {
              required: true,
            },
          },
          {
            label: 'Main title HTML tag (h1 to h6)',
            name: 'titleTag',
            type: 'select',
            options: [
              {label: 'H1', value: 1},
              {label: 'H2', value: 2},
              {label: 'H3', value: 3},
              {label: 'H4', value: 4},
              {label: 'H5', value: 5},
              {label: 'H6', value: 6},
            ],
            validations: {
              required: false,
            },
          },
          {
            label: 'Main title size (1 to 6)',
            name: 'titleSize',
            type: 'select',
            options: [
              {label: '1 / 48px', value: 1},
              {label: '2 / 40px', value: 2},
              {label: '3 / 32px', value: 3},
              {label: '4 / 24px', value: 4},
              {label: '5 / 20px', value: 5},
              {label: '6 / 16px', value: 6},
            ],
            validations: {
              required: false,
            },
          },
        ],
      },
      {
        addons: 'addons',
        controls: [
          {
            label: 'Subtitle text',
            name: 'subtitle',
            type: 'text',
            validations: {
              required: true,
            },
          },
          {
            label: 'Subtitle HTML tag (h1 to h6)',
            name: 'subtitleTag',
            type: 'select',
            options: [
              {label: 'H1', value: 1},
              {label: 'H2', value: 2},
              {label: 'H3', value: 3},
              {label: 'H4', value: 4},
              {label: 'H5', value: 5},
              {label: 'H6', value: 6},
            ],
          },
          {
            label: 'Subtitle size (1 to 6)',
            name: 'subtitleSize',
            type: 'select',
            options: [
              {label: '1 / 48px', value: 1},
              {label: '2 / 40px', value: 2},
              {label: '3 / 32px', value: 3},
              {label: '4 / 24px', value: 4},
              {label: '5 / 20px', value: 5},
              {label: '6 / 16px', value: 6},
            ],
            validations: {
              required: false,
            },
          },
        ],
      },
      {
        controls: [
          {
            label: 'Title & Subtitle with more space?',
            name: 'spaced',
            type: 'select',
            options: [
              {label: 'Yes', value: true},
              {label: 'No', value: false},
            ],
            validations: {
              required: false,
            },
          },
        ],
      },
    ],
    actions: [
      {
        color: 'link',
        text: 'Save component',
        tag: 'button',
        type: 'submit',
      },
    ],
  },
}

export default config
