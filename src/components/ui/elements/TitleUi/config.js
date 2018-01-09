import { inRange } from 'lodash'

const config = {
  name: 'TitleUi',
  label: 'Title',
  description: 'Title of a page or a section',
  icon: 'angle-right',
  group: 'elements',
  listable: true,
  props: [
    {
      propName: 'title',
      label: 'Title text',
      default: '',
      type: String,
      required: false,
    },
    {
      propName: 'titleTag',
      label: 'Title tag',
      default: 'h1',
      type: String,
      required: false,
    },
    {
      propName: 'titleSize',
      label: 'Title size',
      default: null,
      type: String,
      required: false,
      validator (num) {
        return inRange(num, 1, 6)
      },
    },
    {
      propName: 'subtitle',
      label: 'Subtitle text',
      default: '',
      type: String,
      required: false,
    },
    {
      propName: 'subtitleTag',
      label: 'Subtitle tag',
      default: 'h2',
      type: String,
      required: false,
    },
    {
      propName: 'subtitleSize',
      label: 'Subtitle size',
      default: null,
      type: Number,
      required: false,
      validator (num) {
        return inRange(num, 1, 6)
      },
    },
    {
      propName: 'spaced',
      label: 'Title & Subtitle with more space?',
      default: false,
      type: Boolean,
      required: false,
    },
  ],
}

export default config
